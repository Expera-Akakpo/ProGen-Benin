<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/index', function () {
    return view('index');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/partner', function () {
    return view('partner');
});

Route::get('/projects', function () {
    return view('projects');
});

Route::get('/support', function () {
    return view('support');
});

Route::get('/team', function () {
    return view('team');
});

Route::get('/news', function () {
    return view('news');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/detail', function () {
    return view('detail');
});