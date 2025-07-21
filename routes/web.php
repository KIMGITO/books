<?php

use App\Http\Controllers\LevelController;
use App\Models\Book;
use Inertia\Inertia;
use App\Models\Grade;
use App\Models\Level;
use App\Models\Department;
use App\Models\Student;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('/levels', LevelController::class);
    Route::resource('/grades', Grade::class);
    Route::resource('/departments',Department::class);
    Route::resource('/subjects', Subject::class);
    Route::resource('/books', Book::class);
    Route::resource('/teachers', Teacher::class);
    Route::resource('/students', Student::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
