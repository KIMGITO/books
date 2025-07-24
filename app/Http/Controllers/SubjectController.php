<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreSubjectRequest;

class SubjectController extends Controller
{
    public function index(){
        return Inertia::render('app/settings', ['active' => 'subjects']);
    }

    public function store(StoreSubjectRequest $request)
    {
        $validated = $request->validated();
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        Subject::create($validated);

        return redirect()->route('subjects.index')->with('success', 'Subject created successfully.');
    }
}
