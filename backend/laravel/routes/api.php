<?php

use App\Http\Controllers\AdviserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DiseasesController;
use App\Http\Controllers\KitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/


Route::post('/client', [ClientController::class, 'create']);

Route::post('/adviser', [AdviserController::class, 'create']);

Route::get('/diseases', [DiseasesController::class, 'getDiseases']);

Route::post('/getKits', [KitController::class, 'getKits']);

