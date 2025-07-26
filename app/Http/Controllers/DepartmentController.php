<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreDepartmentRequest;

class DepartmentController extends Controller
{
    public function index(){
        $departments = department::all();
        return Inertia::render('app/settings', [
            'active' => 'departments',
            'departments' => $departments,
        ]);
    }

    public function store(StoreDepartmentRequest $request){
        $validated = $request->validated();

        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        Department::create($validated);

        return redirect()->route('departments.index')->with(['success' => 'Department created successfully.']);

    }
}
