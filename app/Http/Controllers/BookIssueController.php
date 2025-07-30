<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookIssueRequest;
use Illuminate\Http\Request;

class BookIssueController extends Controller
{
    public function index(){
        
    }

    public function store(StoreBookIssueRequest $request){
        dd($request);
    }
}
