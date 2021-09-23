<?php

namespace Database\Seeders;

use App\Models\Kit;
use Illuminate\Database\Seeder;

class KitSeeder extends Seeder
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
                "name" => "Kit Hábitosd Saludables",
                "urlImg" => "url/",
                "diseases_id" => "1"
            ],
            [
                "name" => ">Kit de Inicio Saludable",
                "urlImg" => "url/",
                "diseases_id" => "2"
            ],
            [
                "name" => "Kit Hábitos Saludables",
                "urlImg" => "url/",
                "diseases_id" => "3"
            ],
        ];
        foreach ($data as $value) {
            Kit::create($value);
        }
    }
}
