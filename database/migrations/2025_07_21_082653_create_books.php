<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->string('level');
            $table->string('cover_image')->nullable();
            $table->foreignId('subject_id')->nullable()-> constrained('subjects')->onDelete('set null');
            $table->foreignId('created_by')->nullable()-> constrained('users')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()-> constrained('users')->onDelete('set null');
            $table->index(['created_by', 'updated_by'], 'books_user_index');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
