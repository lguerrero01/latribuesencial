<?php

namespace App\Http\Controllers;

use App\Models\Diseases;
use Illuminate\Http\Request;

class DiseasesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function getDiseases()
    {
        $data = Diseases::get();
        return response()->json($data, 200);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data['name'] = $request['checkArray'];
        Diseases::create($data);
        return response()->json([
            'message' => "Diseases created",
            'success' => true
        ], 200);
    }
}
