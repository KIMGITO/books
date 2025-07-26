<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreSubjectRequest;
use App\Models\Department;

class SubjectController extends Controller
{
    public function index()
    {
        $departments = Department::all();
        $subjects = Subject::with(['department'])
            ->orderBy('code', 'asc')
            ->get();

        return Inertia::render('app/settings', ['active' => 'subjects', 'departments' => $departments, 'subjects' => $subjects]);
    }

    public function store(StoreSubjectRequest $request)
    {
        $validated = $request->validated();
        $validated['department_id'] = $validated['department'];
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        Subject::create($validated);


        return redirect()->route('subjects.index')->with('success', 'Subject created successfully.');
    }
}
