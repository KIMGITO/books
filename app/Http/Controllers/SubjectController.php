<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Http\Request;
use App\Http\Requests\StoreSubjectRequest;

class SubjectController extends Controller
{
    public function index(){
        return Inertia::render('app/settings', ['active' => 'subjects']);
    }

    public function store(StoreSubjectRequest $request)
    {
        $validatedData = $request->validated();
        Subject::create($validatedData);

        return redirect()->route('subjects.index')->with('success', 'Subject created successfully.');
    }
}
