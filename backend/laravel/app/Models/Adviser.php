<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'help'
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
}
