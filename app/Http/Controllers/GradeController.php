<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGradeRequest;
use App\Models\Grade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GradeController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(){
        return Inertia::render('app/settings', ['active' => 'classes']);
    }

    /**
     * Store data.
     */

    public function store(StoreGradeRequest $request){
        $validated = $request->validated();

        $grade = Grade::create($validated);

        return redirect()->route('grades.index')->with(['success' => 'Class Created successfully.']);
    }
}
