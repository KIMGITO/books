<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Models\Book;
use App\Models\Level;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index() {
        return Inertia::render('dash/books', [
            'active' => 'English',
            // 'books' => \App\Models\Book::with(['subject', 'department'])->get(),
        ]);
    }

    public function create(){
        $subjects = Subject::all();
        $levels = Level::all();
        return Inertia::render('models/book-create', [
            'subjects'=>$subjects,
            'levels'=> $levels
        ]);
    }


    public function store(StoreBookRequest $request){
        // dd($request);
        $validated = $request->validated();
        $validated['subject_id'] = $validated['subject'];
        $validated['level_id'] = $validated['level'];
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();

        $book = Book::create($validated);

        return redirect()->route('books.create')->with(['success' => 'Book created successfully.']);


    }
}
