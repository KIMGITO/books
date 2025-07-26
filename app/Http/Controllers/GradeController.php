<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Grade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreGradeRequest;
use App\Models\Level;
use App\Models\Teacher;

class GradeController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classes = Grade:: with(['teacher', 'level'])->get();
        $levels = Level::orderBy('name', 'asc')->get();
        $teachers = Teacher::all();
    
        return Inertia::render('app/settings', ['active' => 'classes', 'classes' => $classes, 'levels' => $levels, 'teachers' => $teachers,]);
    }

    /**
     * Store data.
     */

    public function store(StoreGradeRequest $request)
    {
      
        $validated = $request->validated();
        $validated['teacher_id'] = $validated['teacher'];
        
        $validated['level_id'] = $request['level'];
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        $grade = Grade::create($validated);

        return redirect()->route('grades.index')->with(['success' => 'Class Created successfully.']);
    }
}
