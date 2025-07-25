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
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name')->unique();
            $table->string('code')->unique();
            $table->text('description')->nullable();
            $table->foreignId('department_id')->nullable()->nullable()-> constrained ('departments')->onDelete('set null');
            $table->foreignId('created_by')->nullable()-> constrained ('users')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()-> constrained ('users')->onDelete('set null');
            $table->index(['created_by', 'updated_by'], 'subjects_user_index');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subjects');
    }
};
