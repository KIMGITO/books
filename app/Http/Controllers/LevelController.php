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
    
        return Inertia::render('app/settings', ['active' => 'levels']);
    }

    public function store(StoreLevelRequest $request){
     
        // Validate the request data
        $validated = $request->validated();

        // Create a new level using the validated data
        $validated['created_by'] = Auth::id();
        $validated['updated_by'] = Auth::id();
        $level = Level::create($validated);

        // Redirect back with a success message
        return redirect()->route('levels.index')->with('success', 'Level created successfully.');

    }
}
