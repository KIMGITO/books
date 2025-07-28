<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Grade;
use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;

class IssueController extends Controller
{
    public function create()
    {
        $books = Book::with(['subject']) ->orderBy('subject_id','asc') ->get();
        $students = Student::with(['grade'])->get();
        $grades = Grade::all();
        return Inertia::render('actions/book-issue', ['students'=>$students, 'books' =>$books, 'grades'=> $grades]);
    }


    public function return (){
        return Inertia::render('actions/book-return');
    }
}
