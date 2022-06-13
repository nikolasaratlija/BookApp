<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function index()
    {
        return Book::all();
    }

    public function post()
    {
        request()->validate([
            'title' => 'required'
        ]);
    
        return Book::create([
            'title' =>  request('title')
        ]);
    }
}
