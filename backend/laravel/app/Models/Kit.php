<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\{ BelongsToMany};
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kit extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'urlImg'
    ];
    
    protected $casts = [
        'name' => 'string',
        'urlImg' => 'string'
    ];
    

    /**
     * The roles that belong to the Kit
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function diseases(): BelongsToMany
    {
        return $this->belongsToMany(Diseases::class);
    }

}
