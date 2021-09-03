<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

# どのルートにもマッチしないときに
Route::fallback(function () {
    # public/index.htmlにはCRAのビルド結果がおいてある
    return file_get_contents(public_path('index.html'));
});
