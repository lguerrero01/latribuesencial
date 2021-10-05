<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Client extends Model
{
  use HasFactory;


  protected $fillable = [
    'name',
    'email',
    'country',
    'resCountry',
    'phone',
    'children',
    'sport',
    'kit_id'
  ];
  
  protected $casts = [
    'name' => 'string',
    'email' => 'string',
    'country' => 'string',
    'resCountry' => 'string',
    'phone' => 'integer',
    'children' => 'string',
    'sport' => 'string',
  ];

  public function kit(): HasOne
  {
      return $this->hasOne(Kits::class);
  }
}
