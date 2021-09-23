<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Diseases extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'kit_id'
    ];

    protected $casts = [
        'name' => 'string',
    ];

    /**
     * Get the Kits that owns the Diseases
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function kits(): BelongsToMany
    {
        return $this->belongsToMany(Kit::class);
    }
}
