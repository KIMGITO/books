<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        return Inertia::render('models/book-create', [
            // 'subjects' => \App\Models\Subject::all(),
            // 'departments' => \App\Models\Department::all(),
        ]);
    }
}
