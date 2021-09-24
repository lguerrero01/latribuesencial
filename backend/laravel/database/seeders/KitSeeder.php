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
                "imgUrl" => "http://latribu.test/storage/",
            ],
            [
                "name" => "Colección Aroma Esenciales BOTELLAS DE 5 ML Aproximadamente 80 gotas",
                "imgUrl" => "http://latribu.test/storage/",
            ],
            [
                "name" => "Kit Habitos Saludables BOTELLAS DE 5 ML",
                "imgUrl" => "http://latribu.test/storage/",
            ],
            [
                "name" => "Esenciales para el hogar BOTELLAS DE 15 ML APROXIMDADMENTE 250 GOTAS POR BOTELLA",
                "imgUrl" => "http://latribu.test/storage/",
            ]
        ];
        foreach ($data as $value) {
            Kit::create($value);
        }
    }
}
