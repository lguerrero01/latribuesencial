<?php

namespace App\Http\Controllers;

use App\Models\Diseases;
use App\Models\Kit;
use Illuminate\Http\Request;

class KitController extends Controller
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
    public function getKits(Request $request)
    {
        // return ( $request->checkArray);
        // dd($request->checkArray);
        return(Diseases::with(['kits'])->find($request->checkArray)->groupBy('kit_id')->first()->first());
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
     * @param  \App\Models\Kit  $kit
     * @return \Illuminate\Http\Response
     */
    public function show(Kit $kit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kit  $kit
     * @return \Illuminate\Http\Response
     */
    public function edit(Kit $kit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kit  $kit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kit $kit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kit  $kit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kit $kit)
    {
        //
    }
}
