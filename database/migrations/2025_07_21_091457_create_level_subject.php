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
        Schema::create('level_subject', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('level_id')->nullable()-> constrained('levels')->onDelete('set null');
            $table->foreignId('subject_id')->nullable()-> constrained('subjects')->onDelete('set null');
            $table->foreignId('created_by')->nullable()-> constrained('users','id')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()-> constrained('users','id')->onDelete('set null');
            $table->unique(['level_id', 'subject_id'], 'unique_level_subject');
            $table->index(['created_by', 'updated_by'], 'level_subject_user_index');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('level_subject');
    }
};
