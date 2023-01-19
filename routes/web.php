<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/welcome', function () {
    return view('welcome');
});

Route::inertia('/example', 'Example');

Route::get('/', function () {
    return Inertia::render('Inicio');
})->name('inicio');


Route::get('/quienes-somos', function () {
    return Inertia::render('QuienesSomos');
})->name('quienes-somos');

Route::get('/no-mas-violencia', function () {
    return Inertia::render('NoMasViolencia');
})->name('no-mas-violencia');

Route::get('/empoderamiento', function () {
    return Inertia::render('Empoderamiento');
})->name('empoderamiento');

Route::get('/servicios', function () {
    return Inertia::render('Servicios');
})->name('servicios');

Route::get('/tienda', function () {
    return Inertia::render('Tienda');
})->name('tienda');

Route::get('/contactenos', function () {
    return Inertia::render('Contactenos');
})->name('contactenos');


Route::get('/src/{folder}/{category?}/{file}', function ($folder, $category = 'null', $file) {
    /*images/caricaturas/contacto.jpeg'*/
    if ($category == 'null') {
        $directory = base_path() . '/resources/' . trim($folder, " ") . '/' . trim($file, " ");
    } else {
        $directory = base_path() . '/resources/' . trim($folder, " ") . '/' . trim($category, " ") . '/' . trim($file, " ");
    }
    try {

        $file = File::get($directory);
        $type = File::mimeType($directory);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    } catch (Exception $e) {
        echo 'Excepción capturada: ', $e->getMessage(), "\n";
    }
    return $directory;
});


