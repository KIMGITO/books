<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    protected $fillable = [
        'name',
        'description',
        'created_by',
        'updated_by',
    ];
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
    public function subjects()
    {
        return $this->belongsToMany(Subject::class, 'level_subject', 'level_id', 'subject_id')
            ->withTimestamps();
    }
    public function grades()
    {
        return $this->hasMany(Grade::class);
    }
}
