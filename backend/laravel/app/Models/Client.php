<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
   
   
    protected $fillable =[
      'name',
      'email',
      'country',
      'resCountry',
      'phone',
      'children',
      'sport',
    ];
    protected $casts = [
        'name' => 'string',
        'email' => 'string',
        'country' => 'string',
        'resCountry' => 'string',
        'phone' => 'integer',
        'children'=> 'string',
        'sport'=> 'string',
        'workingStatus' =>'string',
        'card' =>'string',
        'help' =>'string'
    ];


}

