<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class IssueController extends Controller
{
    public function create()
    {
        return Inertia::render('actions/book-issue');
    }


    public function return (){
        return Inertia::render('actions/book-return');
    }
}
