<?php
require_once(__DIR__ . '/crest.php');


class Lead
{
    private $email;
    private $name;
    private $country;
    private $resCountry; 
    private $phone; 
    private $children;
    private $sport;   

    public function __construct(
         $email,  
         $name,
         $country,
         $resCountry,
         $phone,
         $children,
         $sport
    ) {
        $this->email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $this->name = ucwords(filter_var($name, FILTER_SANITIZE_STRING));
        $this->country = filter_var($country, FILTER_SANITIZE_STRING);
        $this->resCountry = filter_var($resCountry, FILTER_SANITIZE_STRING);
        $this->phone = $this->getPhoneNumber(filter_var($phone, FILTER_SANITIZE_NUMBER_INT));
        $this->children = filter_var($children, FILTER_SANITIZE_EMAIL);
        $this->sport = filter_var($sport, FILTER_SANITIZE_EMAIL);
    }


    public function Add()
    {
        $result = CRest::call(
            'crm.lead.add',
            [
                'fields' => [
                    'NAME' => $this->name, // nombre del contacto
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
                    'UF_CRM_1633360888176' => $this->children, // Documento de identidad
                    'UF_CRM_1633360995266' => $this->sport, // Tipo de documento de identidad
                ]
            ]
        );

        if (isset($result['error'])) {
            return $this->return('no cumple con el formato valido', 422);
        }

        return  $this->return('ok', 200);
    }

    /**
     * tipo de documento de identidad
     * 
     * "4166" => "V" 
     * "4168" => "J"
     * "4170" => "E"
     */

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

    private function return($msg = null, $status)
    {
        return [
            'msg' => $msg,
            'status' => $status
        ];
    }
}
