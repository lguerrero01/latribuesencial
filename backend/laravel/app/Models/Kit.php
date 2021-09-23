<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kit extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name'
    ];
    
    protected $casts = [
        'name' => 'string',
    ];
    
    /**
     * Get the products that owns the Kit
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function products(): BelongsTo
    {
        return $this->belongsTo(Products::class);
    }

    /**
     * Get all of the diseases for the Kit
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function diseases(): HasMany
    {
        return $this->hasMany(Diseases::class, 'foreign_key', 'local_key');
    }
}
