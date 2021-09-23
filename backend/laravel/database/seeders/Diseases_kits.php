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
                    "diseases_id" => "1",
                    "kits_id" => "2"
                    
               ],
               [
                    "diseases_id" => "1",
                    "kits_id" => "2"
                   
               ],
               [
                    "diseases_id" => "1",
                    "kits_id" => "3"
                  
               ],
               [
                    "diseases_id" => "1",
                    "kits_id" => "3"
                   
               ],
               [
                    "diseases_id" => "1",
                    "kits_id" => "1"
                    
               ],
               [
                    "diseases_id" => "1",
                    "kits_id" => "2"       
               ]
          ];
          foreach ($data as $value) {
               Diseases::create($value);
          }
     }
}
