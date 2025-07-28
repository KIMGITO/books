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

    public function filter($active)
    {
        return $this->index($active);
    }
    public function index($active = '1')
    {
        $subjects = Subject::all();
        $books = Book::with(['level', 'subject'])
        ->where('subject_id', $active)->
        orderBy('subject_id', 'asc')
        ->orderBy('title', 'asc')
        ->orderBy('level_id', 'asc')
        ->get();
        return Inertia::render('dash/books', [
            'books' => $books,
            'subjects' => $subjects,
            'active' => $active,
        ]);
    }

    public function create()
    {
        $subjects = Subject::all();
        $levels = Level::all();
        return Inertia::render('models/book-create', [
            'subjects' => $subjects,
            'levels' => $levels
        ]);
    }


    public function store(StoreBookRequest $request)
    {
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
