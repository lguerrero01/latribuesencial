<?php

namespace App\Http\Controllers;

use App\Bitrix\Lead;
use Illuminate\Http\Request;

class BitrixConnection extends Controller
{

    public function Add(Request $request)
    {
        $addLead = new Lead(
            $request['infoStepForm']['email'],
            $request->infoStepForm['name'],
            $request['infoStepForm']['country'],
            $request['infoStepForm']['resCountry'],
            $request['infoStepForm']['phone']['internationalNumber'],
            $request['basicInfoClient']['children'],
            $request['basicInfoClient']['sport']
        );

        return response()->json($addLead->Add());
    }
}
