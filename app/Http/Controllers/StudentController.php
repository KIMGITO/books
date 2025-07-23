<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{


    public function index(){
        return Inertia::render('dash/students', ['active' => 'f1']);
    }
    public function create(){
        return Inertia::render('models/student-create');
    }
}
