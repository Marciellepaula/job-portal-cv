<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employeer extends Authenticatable
{
    //
    use Notifiable;

    protected $guard = 'employeer';

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
