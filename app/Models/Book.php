<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title',
        'level',
        'subject',
        'summary',
        'cover_image',
        'created_by',
        'updated_by',
    ];
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedByUser()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function students(){
        return $this->belongsToMany(Student::class, 'book_student', 'book_id', 'student_id')
                    ->withTimestamps();
    }

    
}
