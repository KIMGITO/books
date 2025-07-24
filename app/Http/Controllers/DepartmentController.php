<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index(){
        return Inertia::render('app/settings', [
            'active' => 'departments',
        ]);
    }

    public function store(){

    }
}
