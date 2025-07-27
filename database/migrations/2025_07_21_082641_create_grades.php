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
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name')->unique();
            $table->string('short_name')->unique();
            $table->foreignId('teacher_id')->nullable()->constrained('teachers')->onDelete('set null');
            $table->foreignId('level_id')->nullable()-> constrained('levels')->onDelete('set null');
            $table->foreignId('created_by')->nullable()-> constrained('users')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()-> constrained('users')->onDelete('set null');
            


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grades');

    }
};
