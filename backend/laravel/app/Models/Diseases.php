<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diseases extends Model
{
    protected $fillable = [
        'name'
    ];
    
    protected $casts = [
        'name' => 'string',
    ];
    use HasFactory;
}
