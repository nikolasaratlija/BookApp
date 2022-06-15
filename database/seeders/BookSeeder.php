<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::create([
            'title' =>  'Seeded Book 1'
        ]);

        Book::create([
            'title' =>  'Seeded Book 2'
        ]);

        Book::create([
            'title' =>  'Seeded Book 3'
        ]);
    }
}
