<?php

namespace App\Http\Controllers;

use App\Education;
use App\Experience;
use App\Resume;
use App\Skill;
use Illuminate\Http\Request;
use Auth;



class DownloadPdfController extends Controller
{
    // Create options object for Dompdf
    public function create()
    {
        return view('cv.generator');
    }

    public function submit()
    {
        $fileName = 'example.pdf';
        return \PDF::loadView('cv.submit')->setPaper('a4', 'landscape')
            ->download($fileName);
        //return view('cv.submit');
    }

    public function download(Request $request)
    {



        $fileName = 'example.pdf';

        //Save PDF to storag
        return \PDF::loadView('cv.create', compact())
            // Se quiser que fique no formato a4 retrato: ->setPaper('a4', 'landscape')
            ->download($fileName);
    }
}