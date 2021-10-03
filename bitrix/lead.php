<?php
require_once(__DIR__ . '/crest.php');


class Lead
{
    private $title;
    private $name;
    private $lastName;
    private $documentType;
    private $documentId;
    private $phone;
    private $email;
    private $carBrand;
    private $carModel;
    private $carYear;

    public function __construct(
        $name,
        $lastName,
        $documentType,
        $documentId,
        $phone,
        $email,
        $carBrand,
        $carModel,
        $carYear
    ) {
        $this->name = ucwords(filter_var($name, FILTER_SANITIZE_STRING));
        $this->lastName = ucwords(filter_var($lastName, FILTER_SANITIZE_STRING));
        $this->documentType = $this->getDocumentType($documentType);
        $this->documentId = filter_var($documentId, FILTER_SANITIZE_NUMBER_INT);
        $this->phone = $this->getPhoneNumber(filter_var($phone, FILTER_SANITIZE_NUMBER_INT));
        $this->email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $this->carBrand = filter_var($carBrand, FILTER_SANITIZE_STRING);
        $this->carModel = filter_var($carModel, FILTER_SANITIZE_STRING);
        $this->carYear = filter_var($carYear, FILTER_SANITIZE_STRING);
        $this->title = $this->name . ' ' . $this->lastName . ' Landing Page - Campaña Publicitaria';
    }


    public function Add()
    {
        $result = CRest::call(
            'crm.lead.add',
            [
                'fields' => [
                    'TITLE' => $this->title, // nombre del prospecto
                    'NAME' => $this->name, // nombre del contacto
                    'LAST_NAME' => $this->lastName, // apellido del contacto
                    'SOURCE_ID' => '12', // fuente(origen) 12 = landing page - campañas publicitarias
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
                    'UF_CRM_1596600472' => [100], // Posible Cliente de
                    'UF_CRM_1596725312' => '170', // Tipo de Prospecto
                    'UF_CRM_1596950775' => '6462', // Categoria
                    'UF_CRM_1606156549' => '1266', // Cliente de
                    'UF_CRM_1618343757229' => $this->documentId, // Documento de identidad
                    'UF_CRM_1618343805346' => $this->documentType, // Tipo de documento de identidad
                    'UF_CRM_1619024910556' => '6138', // sector de actividad
                    'UF_CRM_1619706478410' => [$this->carBrand], // marca del vehiculo
                    'UF_CRM_1619706499613' => [$this->carModel], // modelo del vehiculo
                    'UF_CRM_1619706522222' => [$this->carYear] // anio del vehiculo
                ]
            ]
        );

        if (isset($result['error'])) {
            return $this->return('El correo electronico no cumple con el formato valido', 422);
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
    private function getDocumentType(string $var = null): string
    {
        $data = '';
        switch ($var) {
            case 'J':
                $data = '4168';
                break;

            case 'E':
                $data = '4170';
                break;

            case 'V':
                $data = '4166';
                break;

            default:
                $data = '4166';
                break;
        }

        return $data;
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

    private function return($msg = null, $status)
    {
        return [
            'msg' => $msg,
            'status' => $status
        ];
    }
}
