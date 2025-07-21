<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    public function index(){
        return Inertia::render('app/settings', ['active' => 'subjects']);
    }
}
