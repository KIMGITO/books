<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Department;
use Illuminate\Http\Request;
use App\Http\Requests\StoreDepartmentRequest;

class DepartmentController extends Controller
{
    public function index(){
        return Inertia::render('app/settings', [
            'active' => 'departments',
        ]);
    }

    public function store(StoreDepartmentRequest $request){
        $validated = $request->validated();

        Department::create($validated);

        return redirect()->route('departments.index')->with(['success' => 'Department created successfully.']);

    }
}
