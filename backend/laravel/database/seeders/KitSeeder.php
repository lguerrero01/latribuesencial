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
                "name" => "Kit de Inicio Saludable BOTELLAS DE 5 ML Aproximadamente 80 gotas por botella",
                "imgUrl" =>  env('APP_URL')."/storage/kits/inicio_saludable.png",
            ],
            [
                "name" => "Colección Aroma Esenciales BOTELLAS DE 5 ML Aproximadamente 80 gotas",
                "imgUrl" =>  env('APP_URL')."/storage/kits/aromas_esenciales.png",
            ],
            [
                "name" => "Kit Habitos Saludables BOTELLAS DE 5 ML",
                "imgUrl" =>  env('APP_URL')."/storage/kits/habitos_saludables.png",
            ],
            [
                "name" => "Esenciales para el hogar BOTELLAS DE 15 ML APROXIMDADMENTE 250 GOTAS POR BOTELLA",
                "imgUrl" => env('APP_URL')."/storage/kits/soluciones_limpia.png",
            ]
        ];
        foreach ($data as $value) {
            Kit::create($value);
        }
    }
}
