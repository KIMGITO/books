<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Grade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreGradeRequest;

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

        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        $grade = Grade::create($validated);

        return redirect()->route('grades.index')->with(['success' => 'Class Created successfully.']);
    }
}
