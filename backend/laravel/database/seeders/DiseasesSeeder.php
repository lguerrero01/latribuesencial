<?php

namespace Database\Seeders;

use App\Models\Diseases;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class DiseasesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    
    public function run()
    {
       $data = [
            [
                 "name"=>"Ansiedad"
            ],
            [
                 "name"=>"Dermatitis Atopica"
            ],
            [
                 "name"=>"Insomnio"
            ],
            [
                 "name"=>"Eczema"
            ],
            [
                 "name"=>"Caida del Cabello"
            ],
            [
                 "name"=>"Problemas estomacales"
            ]
        ];
            foreach ($data as $value) {
                # code...
                Diseases::create($value);
            }
        
    }
}

