<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Adviser extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'country',
        'resCountry',
        'ocupation',
        'maritalStatus',
        'children',
        'bePart',
        'desc',
        'workingStatus',
        'card',
        'help',
        'kit_id'
    ];
    protected $cast = [
        'name' => 'string',
        'email' => 'string',
        'phone' => 'integer',
        'country' => 'string',
        'resCountry' => 'string',
        'ocupation' => 'string',
        'maritalStatus' => 'string',
        'children' => 'stirng',
        'bePart' => 'string',
        'desc' => 'string',
        'workingStatus' => 'string',
        'card' => 'string',
        'help' => 'string'
    ];
    public function kit(): HasOne
    {
        return $this->hasOne(Kits::class);
    }
}
