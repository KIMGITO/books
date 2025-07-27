<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use Inertia\Inertia;
use App\Models\Grade;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StudentStoreRequest;

class StudentController extends Controller
{

    public function filter($class = 1){
        return $this->index($class);
    }


    public function index($class=1)
    {
        // dd($class);
        $grades = Grade::orderBy('level_id', 'asc')->get();
        $students = Student::with(['grade'])->where('grade_id', $class)->orderBy('grade_id', 'asc')->get();
        return Inertia::render('dash/students', ['active' => $class, 'students' => $students, 'grades' => $grades]);
    }
    public function create()
    {
        $grades = Grade::orderBy('name')->get();

        return Inertia::render('models/student-create', ['grades' => $grades]);
    }

    public function store(StoreStudentRequest $request)
    {
        $validated = $request->validated();
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        $validated['grade_id'] = $validated['grade'];

        $student = Student::create($validated);

        return redirect()->route('students.index')->with(['success' => 'Student Created successfully.']);
    }
}
