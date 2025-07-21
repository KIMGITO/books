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
        Schema::create('levels_subjects', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('level_id')->constrained('levels')->onDelete('cascade');
            $table->foreignId('subject_id')->constrained('subjects')->onDelete('cascade');
            $table->foreignId('created_by')->constrained('users')->onDelete('set null');
            $table->foreignId('updated_by')->constrained('users')->onDelete('set null');
            $table->unique(['level_id', 'subject_id'], 'unique_level_subject');
            $table->index(['created_by', 'updated_by'], 'level_subject_user_index');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels_subjects');
    }
};
