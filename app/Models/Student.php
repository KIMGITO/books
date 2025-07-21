<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{

    protected $fillable = [
        'first_name',
        'middle_name',
        'sir_name',
        'adm_no',
        'class_id',
        'created_by',
        'updated_by'

    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function grade(){
        return $this->belongsTo(Grade::class);
    }
    public function subjects(){
        return $this->belongsToMany(Subject::class, 'student_subject', 'student_id', 'subject_id')
                    ->withTimestamps();

    }

    public function books(){
        return $this->belongsToMany(Book::class, 'book_student', 'student_id', 'book_id')
                    ->withTimestamps();
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    
}
