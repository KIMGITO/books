<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Date;
use Inertia\Inertia;
use App\Models\Grade;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreBookIssueRequest;
use App\Models\BookIssue;
use Illuminate\Support\Facades\Date as FacadesDate;

class IssueController extends Controller
{
    public function create()
    {
        $books = Book::with(['subject'])->orderBy('subject_id', 'asc')->get();
        $students = Student::with(['grade'])->get();
        $grades = Grade::all();
        return Inertia::render('actions/book-issue', ['students' => $students, 'books' => $books, 'grades' => $grades]);
    }


    public function store(StoreBookIssueRequest $request)
    {
       

        $failed = [];
        $issued = [];
        $no_match = [];

        foreach ($request['data'] as $data) {
            $validated = [
                'student_id' => $data['studentId'],
                'book_id' => $data['bookId'],
                'book_number' => $data['bookNumber'],
                'due_date' => $data['dueDate'],
                'issued_at' => FacadesDate::now(),
                'created_by' => Auth::id(),
                'updated_by' => Auth::id(),
            ];

            $book_number = $validated['book_number'];

            // 1. Check if student already has that book and hasn't returned it
            $alreadyIssued = BookIssue::where('student_id', $validated['student_id'])
                ->where('book_id', $validated['book_id'])
                ->whereNull('returned_at')
                ->exists();

            if ($alreadyIssued) {
                $failed[] = $book_number;
                continue;
            }

            // 2. Check if the book (same book number) is issued to someone else
            $issued_book_details = BookIssue::with(['student', 'book'])
                ->where('book_number', $book_number)
                ->whereNull('returned_at')
                ->first();

            if ($issued_book_details) {
                $msg = "Book Number $book_number is already issued to student ADM.NO: {$issued_book_details->student->adm_no}";
                if (!in_array($msg, $issued)) {
                    $issued[] = $msg;
                }
                continue;
            }

            // 3. Check level mismatch if grade is specified
            $book = Book::find($validated['book_id']);
            $student = Student::find($validated['student_id']);

            if ($book && $book->level_id && $book->level_id != $student->level_id) {
                $no_match[] = "FAILED: Book Number {$validated['book_number']} cannot be issued to ADM.NO: {$student->adm_no}.Book / Student level mismatched.";
                continue;
            }

            // 4. Create the issue record
            BookIssue::create($validated);
        }

        if ($failed) {
            return back()->with('error', 'FAILED: Books with book numbers ' . implode(', ', $failed) . ' not issued. Student has similar book.');
        } elseif ($issued) {
            return back()->with('error', 'FAILED: ' . implode(' | ', $issued));
        } elseif ($no_match) {
            return back()->with('error', implode(' | ', $no_match));
        }else{
            return back()->with('success', 'All books issued successfully.');
        }
    }


    public function return()
    {
        return Inertia::render('actions/book-return');
    }
}
