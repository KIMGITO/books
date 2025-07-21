<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = [
        'name',
        'hod',
        'description',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
    public function teachers()
    {
        return $this->hasMany(related: Teacher::class,);
    }
    public function subjects(){
        return $this->hasMany(related: Subject::class);
    }

    
}
