<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Authcontroller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register',[Authcontroller::class, 'register']);
Route::post('/login',[Authcontroller::class, 'login']);

Route::middleware('auth:sanctum')->group(function ()
{
    Route::get('/checkingAuthenticated', function ()
    {
        return response()->json(
            ['message' => 'You are in', 'status' => 200],
            200);
    });
   Route::post('/logout',[Authcontroller::class, 'logout']); 
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
