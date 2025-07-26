<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Teacher;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreTeacherRequest;

class TeacherController extends Controller
{
    public function index(){
        $teachers = Teacher:: with(['department', 'grade'])-> orderBy('first_name')->get();
        return Inertia::render('dash/teachers', ['teachers'=>$teachers]);
    }
    public function create(){
        $departments = Department::all();
        return Inertia::render(
            'models/teacher-create', ['departments' => $departments]
        );
    }

    public  function store(StoreTeacherRequest  $request){
        $validated = $request->validated();
        $validated['department_id'] = $validated['department'];
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();

        $teacher =  Teacher::create($validated);

        return redirect()->route('teachers.index')->with('success', 'Teacher created successfully.');
    }
}
