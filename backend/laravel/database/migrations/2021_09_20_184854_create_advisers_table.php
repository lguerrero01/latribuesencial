<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdvisersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advisers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('email');
            $table->string('country');
            $table->string('resCountry');
            $table->string('phone');
            $table->string('ocupation');
            $table->string('maritalStatus');
            $table->string('children');
            $table->string('bePart');
            $table->string('desc');
            $table->string('workingStatus');
            $table->string('card');
            $table->string('help'); 
            $table->foreignId('kit_id')->constrained();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('advisers');
    }
}
