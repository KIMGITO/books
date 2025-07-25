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
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('sir_name');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('email')->unique();
            $table->string('phone')->nullable()->unique();
            $table->foreignId('department_id')->nullable()-> constrained('departments')->onDelete('set null');
            $table->foreignId('created_by')->nullable()-> constrained('users')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()-> constrained('users')->onDelete('set null');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
