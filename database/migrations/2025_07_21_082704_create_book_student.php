<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_student', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->date('issued_at')->nullable();
            $table->date('returned_at')->nullable();
            $table->date('due_date')->default(Date::now()->endOfYear());

            $table->foreignId('book_id')->nullable()->constrained('books')->onDelete('set null');
            $table->string('book_number');
            $table->foreignId('student_id')->nullable()->constrained('students')->onDelete('set null');
            $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()->constrained('users')->onDelete('set null');

            $table->index(['created_by', 'updated_by'], 'book_student_user_index');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_student');
    }
};
