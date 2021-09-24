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
                    "name" => "Problemas estomacales",],



                    ["name" => "Infecciones urinarias",],



                    ["name" => "Migraña",],



                    ["name" => "Dolores musculares",],



                    ["name" => "Problemas respiratorios",],



                    



                    ["name" => "Fibromialgia",
                    ],
                    
                    
                    ["name" => "Hiperactividad en los niños",],



                    ["name" => "Menopausia",],



                    ["name" => "Alergias",],



                    ["name" => "Cansancio",],



                    ["name" => "Caspa",],



                    ["name" => "Dolores de garganta",],



                    ["name" => "Estreñimiento",],



                    ["name" => "Gripes recurrentes",],



                    ["name" => "Herpes labial",],



                    ["name" => "Hongos en la piel",],



                    ["name" => "Manchas en la piel",],



                   [ "name" => "Dolores menstruales",],



                   [ "name" => "Náuseas",],



                    ["name" => "Dolores de oído",],



                    ["name" => "Náuseas",],



                   [ "name" => "Pie de atleta",],



                  [  "name" => "Piojos",],


                    ["name" => "Embarazo",],



                   [ "name" => "Reducción de carga tóxica",],



          ];
          foreach ($data as $value) {
               Diseases::create($value);
          }
     }
}
