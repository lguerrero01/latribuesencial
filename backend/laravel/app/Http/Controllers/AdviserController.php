<?php

namespace App\Http\Controllers;

use App\Models\Adviser;
use Illuminate\Http\Request;

class AdviserController extends Controller
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data['name'] = $request['infoStepForm']['name'];
        $data['email'] = $request['infoStepForm']['email'];
        $data['country'] = $request['infoStepForm']['country'];
        $data['resCountry'] = $request['infoStepForm']['resCountry'];
        $data['phone'] = $request['infoStepForm']['phone'];
        
        $data['ocupation'] = $request['form1Adviser']['ocupation'];
        $data['maritalStatus'] = $request['form1Adviser']['maritalStatus'];
        $data['children'] = $request['form1Adviser']['children'];
        $data['bePart'] = $request['form2Adviser']['bePart'];
        $data['desc'] = $request['form2Adviser']['desc'];
        $data['workingStatus'] = $request['form3Adviser']['workingStatus'];
        $data['card'] = $request['form3Adviser']['card'];
        $data['help'] = $request['form3Adviser']['help'];
        $data['kit_id'] = $request['kit'];

        Adviser::create($data);
        return response()->json([
            'message' => "Adviser created",
            'success' => true
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Adviser  $adviser
     * @return \Illuminate\Http\Response
     */
    public function show(Adviser $adviser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Adviser  $adviser
     * @return \Illuminate\Http\Response
     */
    public function edit(Adviser $adviser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Adviser  $adviser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Adviser $adviser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Adviser  $adviser
     * @return \Illuminate\Http\Response
     */
    public function destroy(Adviser $adviser)
    {
        //
    }
}
