<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = [
        'name',
        'short_name',
        'level_id',
        'teacher_id',
        'created_by',
        'updated_by',
    ];
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
    public function students()
    {
        return $this->hasMany(Student::class);
    }
    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }
    public function teacher()
    {
        return $this->belongsTo(Teacher::class, );
    }
    public function level()
    {
        return $this->belongsTo(Level::class);
    }


}
