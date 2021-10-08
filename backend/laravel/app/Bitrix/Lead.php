<?php

namespace App\Bitrix;

use App\Bitrix\Crest;
use GrahamCampbell\ResultType\Result;

use function GuzzleHttp\Promise\all;

class Lead
{
    // info stepper
    private $email;
    private $name;
    private $country;
    private $resCountry;
    private $phone;
    // info client
    private $children;
    private $sport;
    // kit
    private $kit;
    // form1Adviser
    private $ocupation;
    private $maritalStatus;
    private $childrenAdviser;
    //form2Adviser
    private $bePart;
    private $desc;
    // form3Adviser
    private $card;
    private $workingStatus;
    private $help;


    public function __construct(
        // info stepper
        $email,
        $name,
        $country,
        $resCountry,
        $phone,
        //  info client
        $children,
        $sport,
        //  kit
        $kit,
        //  form1Adviser
        $ocupation,
        $maritalStatus,
        $childrenAdviser,
        // form2Adviser
        $bePart,
        $desc,
        //  form3Adviser
        $card,
        $workingStatus,
        $help,
        $role

    ) {
        $this->email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $this->name = ucwords(filter_var($name, FILTER_SANITIZE_STRING));
        $this->country = filter_var($country, FILTER_SANITIZE_STRING);
        $this->resCountry = filter_var($resCountry, FILTER_SANITIZE_STRING);
        $this->phone = filter_var($phone, FILTER_SANITIZE_STRING);

        $this->children = filter_var($children, FILTER_SANITIZE_STRING);
        $this->sport = filter_var($sport, FILTER_SANITIZE_STRING);

        $this->kit = $kit;

        $this->ocupation = filter_var($ocupation, FILTER_SANITIZE_STRING);
        $this->maritalStatus = filter_var($maritalStatus, FILTER_SANITIZE_STRING);
        $this->childrenAdviser = filter_var($childrenAdviser, FILTER_SANITIZE_STRING);

        $this->bePart = filter_var($bePart, FILTER_SANITIZE_STRING);
        $this->desc = filter_var($desc, FILTER_SANITIZE_STRING);

        $this->card = filter_var($card, FILTER_SANITIZE_STRING);
        $this->workingStatus = filter_var($workingStatus, FILTER_SANITIZE_STRING);
        $this->help = filter_var($help, FILTER_SANITIZE_STRING);
        $this->role = filter_var($role, FILTER_SANITIZE_STRING);
    }

    public function Add()
    {
        $result = Crest::call(
            'crm.lead.add',
            [
                'fields' => [
                    'TITLE' => $this->name, // nombre del contacto
                    'HAS_PHONE' => 'Y', // indica si el campo phone esta activo
                    'HAS_EMAIL' => 'Y', // indica si el campo email esta activo
                    'PHONE' => [[ // 
                        "VALUE_TYPE" => "WORK",
                        "VALUE" => $this->phone
                    ]],
                    'EMAIL' => [[
                        "VALUE_TYPE" => "WORK",
                        "VALUE" => $this->email
                    ]],
                    "OPENED" => "Y", // prospecto disponible para todos
                    'UF_CRM_1633358912' => $this->country, // Pais de Origen
                    'UF_CRM_1633358938' => $this->resCountry, // Pais de residencia

                    'UF_CRM_1633633674193' => $this->card, // tarjeta de credito
                    'UF_CRM_1633633769090' => $this->help, // ayuda

                    'UF_CRM_1633633809317' => $this->workingStatus, // esta trabajando actualmente?
                    'UF_CRM_1633633841892' => $this->maritalStatus, // estado civil
                    'UF_CRM_1633639294247' => $this->bePart, // ¿Por que quieres ser parte de la Tribu Esencial?
                    'UF_CRM_1633372595799' => $this->desc, // ¿Cómo te describes?
                    'UF_CRM_1633633769090' => $this->help,//  ¿Estás dispuesto a invertir para tu uso personal y para tu hogar 120$ aproximadamente en productos?
                    'UF_CRM_1633633368907' => $this->kit, 
            
                ]
            ]
        );

        $response = (!isset($result['error']))
            ? (object)[
                'data' => [
                    (object)[
                        'code'    => 200,
                        'message' => 'ok'
                    ]
                ],
                'errors' => []
            ] : (object)[
                'data' => [],
                'errors' => [
                    (object)[
                        'code'    => 422,
                        'message' => 'no cumple con el formato valido'
                    ]
                ]
            ];

        return $response;
    }

    private function getPhoneNumber(string $var = null)
    {
        $phone = '';

        // return if the data have char
        if (preg_match("/^[[:digit:]]+$/", $var) == 0) {
            return false;
        }

        // formating the number
        $countryCodeRaw = substr($var, 0, strlen($var) - 10);
        $countryCode = ($countryCodeRaw == '0') ? '58' : $countryCodeRaw;
        $areaCode = substr($var, -10, 3);
        $nextThree = substr($var, -7, 3);
        $lastFour = substr($var, -4, 4);
        $phone = '+' . $countryCode . $areaCode . $nextThree . $lastFour;

        return $phone;
    }
}
