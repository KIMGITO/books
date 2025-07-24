<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Level;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreLevelRequest;

class LevelController extends Controller
{
    /**
     * Display the settings page.
     *
     * @return \Inertia\Response
     */

    public function index(){
    
        return Inertia::render('app/settings', []);
    }

    public function store(StoreLevelRequest $request){
     
        // Validate the request data
        $validated = $request->validated();

        // Create a new level using the validated data
        $level = Level::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'created_by' => Auth::id(),
            'updated_by' => Auth::id(),
        ]);

        // Redirect back with a success message
        return redirect()->back()->with('success', 'Level created successfully.');

    }
}
