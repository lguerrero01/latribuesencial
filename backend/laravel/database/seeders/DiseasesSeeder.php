<?php

namespace Database\Seeders;

use App\Models\Disease;
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
                    "name" => "Ansiedad",


               ],
               [
                    "name" => "Dermatitis Atopica",

               ],
               [
                    "name" => "Insomnio",

               ],
               [
                    "name" => "Eczema",

               ],
               [
                    "name" => "Caida del Cabello",

               ],

               [
                    "name" => "Problemas estomacales",

               ],

               [
                    "name" => "Infecciones urinarias",

               ],

               [
                    "name" => "Migraña",

               ],

               [
                    "name" => "Dolores musculares",

               ],

               [
                    "name" => "Problemas respiratorios",

               ],

               [
                    "name" => "Debilidad en el sistema inmunológico",

               ],

               [
                    "name" => "Fibromialgia",

               ],

               [
                    "name" => "Hiperactividad en los niños",

               ],

               [
                    "name" => "Menopausia",

               ],

               [
                    "name" => "Alergias",

               ],

               [
                    "name" => "Cansancio",

               ],

               [
                    "name" => "Caspa",

               ],

               [
                    "name" => "Dolores de garganta",

               ],

               [
                    "name" => "Estreñimiento",

               ],

               [
                    "name" => "Gripes recurrentes",

               ],

               [
                    "name" => "Herpes labial",

               ],

               [
                    "name" => "Hongos en la piel",

               ],

               [
                    "name" => "Manchas en la piel",

               ],

               [
                    "name" => "Dolores menstruales",

               ],

               [
                    "name" => "Náuseas",

               ],

               [
                    "name" => "Dolores de oído",

               ],

               [
                    "name" => "Pie de atleta",

               ],

               [
                    "name" => "Piojos",

               ],

          ];
          // foreach ($data as $value) {
          //      Disease::create($value)->kits()->attach([
          //           1,
          //           2,3,4
          //      ]);
          // }
          Disease::create([
               "name" => "Ansiedad"
          ])->kits()->attach([
               1, 2
          ]);
          Disease::create([
               "name" => "Dermatitis Atopica"
          ])->kits()->attach([
               1, 3
          ]);

          Disease::create([
               "name" => "Insomnio"
          ])->kits()->attach([
               2
          ]);
          Disease::create([
               "name" => "Eczema"
          ])->kits()->attach([
               1,3
          ]);
          Disease::create([
               "name" => "Caida del Cabello"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Problemas estomacales"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Infecciones urinarias"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Migraña"
          ])->kits()->attach([
               1,3
          ]);
          Disease::create([
               "name" => "Dolores musculares"
          ])->kits()->attach([
               3,4
          ]);
          Disease::create([
               "name" => "Problemas respiratorios"
          ])->kits()->attach([
               1,2
          ]);
          Disease::create([
               "name" => "Debilidad en el sistema inmunológico"
          ])->kits()->attach([
               2,3
          ]);
          Disease::create([
               "name" => " Fibromialgia"
          ])->kits()->attach([
               3,4
          ]);
          Disease::create([
               "name" => " Hiperactividad en los niños"
          ])->kits()->attach([
               1,2
          ]);
          Disease::create([
               "name" => "Menopausia"
          ])->kits()->attach([
               3
          ]);
          Disease::create([
               "name" => "Alergias"
          ])->kits()->attach([
               1,2
          ]);
          Disease::create([
               "name" => "Cansancio"
          ])->kits()->attach([
               1,2
          ]);
          Disease::create([
               "name" => "Caspa"
          ])->kits()->attach([
               1,3
          ]);
          Disease::create([
               "name" => "Dolores de garganta"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Estreñimiento"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Gripes recurrentes"
          ])->kits()->attach([
               1,2
          ]);
          Disease::create([
               "name" => "Herpes labial"
          ])->kits()->attach([
               1,2
          ]);
          Disease::create([
               "name" => "Hongos en la piel"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Manchas en la piel"
          ])->kits()->attach([
               3,4
          ]);
          Disease::create([
               "name" => "Dolores menstruales"
          ])->kits()->attach([
               3,4
          ]);
          Disease::create([
               "name" => "Náuseas"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Dolores de oído"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Pie de atleta"
          ])->kits()->attach([
               1
          ]);
          Disease::create([
               "name" => "Piojos"
          ])->kits()->attach([
               1
          ]);
          
     }
}
