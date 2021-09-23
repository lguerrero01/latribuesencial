<?php

namespace App\Models;
use \Illuminate\Database\Eloquent\Relations\{HasMany};
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'desc'
    ];
    
    protected $casts = [
        'name' => 'string',
        'desc' => 'string'
    ];


  /**
   * Get all of the kits for the Product
   *
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function kits(): HasMany
  {
      return $this->hasMany(Kits::class);
  }

}
