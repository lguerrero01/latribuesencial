<?php

namespace App\Http\Controllers;

use CRest;
use Illuminate\Http\Request;

class BitrixConnection extends Controller
{

    public function Add(Request $request)
    {
        $result = CRest::call(
            'crm.lead.add',
            [
                'fields' => [
                    'NAME' => $request->infoStepForm['name'], // nombre del contacto
                    'HAS_PHONE' => 'Y', // indica si el campo phone esta activo
                    'HAS_EMAIL' => 'Y', // indica si el campo email esta activo
                    'PHONE' => [[ // 
                        "VALUE_TYPE" => "WORK",
                        "VALUE" => $request['infoStepForm']['phone']
                    ]],
                    'EMAIL' => [[
                        "VALUE_TYPE" => "WORK",
                        "VALUE" => $request['infoStepForm']['email']
                    ]],
                    "OPENED" => "Y", // prospecto disponible para todos
                    'UF_CRM_1633358912' => $request['infoStepForm']['country'], // Pais de Origen
                    'UF_CRM_1633358938' => $request['infoStepForm']['resCountry'], // Pais de residencia
                    'UF_CRM_1633360888176' => $request['basicInfoClient']['sport'], // Documento de identidad
                    'UF_CRM_1633360995266' => $request['basicInfoClient']['sport'], // Tipo de documento de identidad
                ]
            ]
        );

        if (isset($result['error'])) {
            return $this->return('no cumple con el formato valido', 422);
        }

        return  $this->return('ok', 200);
    }

    private function return($msg = null, $status)
    {
        return [
            'msg' => $msg,
            'status' => $status
        ];
    }
}
