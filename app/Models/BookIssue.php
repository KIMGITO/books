<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookIssue extends Model
{
    protected $table = 'book_student';

    protected $fillable = [
        'student_id',
        'book_id',
        'book_number',
        'issued_at',
        'returned_at',
        'created_by',
        'updated_by'
    ];

    public function book (){
        return $this->belongsTo(Book::class,'book_id');
    }

    public function student (){
        return $this->belongsTo(Student::class, 'student_id');
    }


    // protected static function book(){
    //     parent::boot();

    //     static::creating(function ($issuedBook) {
            
    //         if (static::where('student_id', $issuedBook->student_id)->where('book_id', $issuedBook->book_id)->where('returned_at', null)->exists())
    //         {
    //             dd();
    //             // return [false, 'message' => 'This student has this book.'];
    //             return false;
    //         }

    //         $availableCopies = $issuedBook->book->quantity - 1;
    //         if($availableCopies < 0) {
    //             // return [false, 'message' => 'No available copies of this book.'];
    //             return false;
    //         }
    //     });

    //     static::created(function ($issuedBook) {
    //         Book::where('id', $issuedBook->book_id)->decrement('quantity', 1);
    //     });


    // }




}

