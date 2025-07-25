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
        Schema::create('levels', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('description')->nullable();
            $table->foreignId('created_by')->nullable()-> constrained('users')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()-> constrained('users')->onDelete('set null');
            $table->timestamps();

            $table->index(['created_by', 'updated_by'], 'levels_user_index');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels');
    }
};
