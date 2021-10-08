<?php

namespace App\Http\Controllers;

use App\Bitrix\Lead;
use Illuminate\Http\Request;

class BitrixConnection extends Controller
{

    public function Add(Request $request)
    {
        // return($request['form1Adviser']['maritalStatus']);
        $addLead = new Lead(
            $request['infoStepForm']['email'],
            $request['infoStepForm']['name'],
            $request['infoStepForm']['country'],
            $request['infoStepForm']['resCountry'],
            $request['infoStepForm']['phone']['internationalNumber'],

            (($request['basicInfoClient']) ?  $request['basicInfoClient']['children'] : ''),
            (($request['basicInfoClient']) ? $request['basicInfoClient']['sport'] : ''),
            
            (($request['kit']) ? $request->kit : ''),

            $request['form1Adviser'] ? $request['form1Adviser']['ocupation'] : '',
            $request['form1Adviser'] ? $request['form1Adviser']['maritalStatus'] : '',
            $request['form1Adviser'] ? $request['form1Adviser']['childrenAdviser'] : '',

            $request['form2Adviser'] ? $request['form2Adviser']['bePart'] : '',
            $request['form2Adviser'] ? $request['form2Adviser']['desc'] : '',

            $request['form3Adviser'] ? $request['form3Adviser']['card'] : '',
            $request['form3Adviser'] ? $request['form3Adviser']['workingStatus'] : '',
            $request['form3Adviser'] ? $request['form3Adviser']['help'] : '',
            $request['role'] ? $request['role'] : '',
        );

        return response()->json($addLead->Add());
    }
}
