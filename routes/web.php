<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\IssueController;
use App\Http\Controllers\LevelController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TeacherController;
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
    Route::resource('/grades', GradeController::class);
    Route::resource('/departments',DepartmentController::class);
    Route::resource('/subjects', SubjectController::class);
    Route::resource('/books', BookController::class);
    Route::resource('/teachers', TeacherController::class);
    Route::resource('/students', StudentController::class);
    Route::resource('/books-issue', IssueController::class);
    Route::get('/book-return', [IssueController::class, 'return'])->name('book.return');
    Route::get('/class/{id}/students', [StudentController::class, 'filter'])->name('students.filter');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
