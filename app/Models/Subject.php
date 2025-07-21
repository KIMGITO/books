<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = [
        'name',
        'code',
        'description',
        'level',
        'department_id',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function students()
    {
        return $this->belongsToMany(Student::class, 'student_subject', 'subject_id', 'student_id')
                    ->withTimestamps();
    }

    public function books()
    {
        return $this->hasMany(Book::class);
    }
    public function levels()
    {
        return $this->belongsToMany(Level::class, 'level_subject', 'subject_id', 'level_id')
                    ->withTimestamps();
    }
}
