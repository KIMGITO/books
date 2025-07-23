<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index(){
        return Inertia::render('dash/teachers');
    }
    public function create(){
        return Inertia::render(
            'models/teacher-create'
        );
    }
}
