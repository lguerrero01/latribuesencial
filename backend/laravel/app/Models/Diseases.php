<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diseases extends Model
{
    use HasFactory;
    protected $fillable = [
        'name'
    ];
    
    protected $casts = [
        'name' => 'string',
    ];

 /**
  * Get the Kits that owns the Diseases
  *
  * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
  */
 public function kits(): BelongsTo
 {
     return $this->belongsTo(Kits::class);
 }
}
