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
                "name" => "Kit de Inicio Saludable",
                "imgUrl" =>  env('APP_URL')."/storage/kits/inicio_saludable.png",
            ],
            [
                "name" => "Colección Aroma Esenciales",
                "imgUrl" =>  env('APP_URL')."/storage/kits/aromas_esenciales.png",
            ],
            [
                "name" => "Kit Habitos Saludables",
                "imgUrl" =>  env('APP_URL')."/storage/kits/habitos_saludables.png",
            ],
            [
                "name" => "Esenciales para el hogar",
                "imgUrl" => env('APP_URL')."/storage/kits/soluciones_limpia.png",
            ]
        ];
        foreach ($data as $value) {
            Kit::create($value);
        }
    }
}
