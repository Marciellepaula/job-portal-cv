<?php

namespace App\Http\Controllers;

use App\Education;
use App\Experience;
use App\Resume;
use App\Skill;
use Illuminate\Http\Request;
use Auth;
use Dompdf\Dompdf;

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
        \PDF::setOptions(['dpi' => 150, 'defaultFont' => 'sans-serif']);
        $pdf = \PDF::loadView('cv.submit')->setPaper('a4', 'landscape');
        return $pdf->stream($fileName);



        // $dompdf = new Dompdf();
        // $html = \PDF::LOADView('cv.submit');
        // $html .= ' <link type="text/css" media="all" rel="stylesheet" href="{{ asset(css1/style.css) }}">';
        // $dompdf->loadHtml($html);

        // $fileName = 'example.pdf';
        // $pdf =  $dompdf->stream($fileName, [
        //     "Attachment" => true
        // ]);
        // return $pdf;

        //return view('cv.submit');
    }

    public function index()
    {
        return view('cv.PPP');
    }

    public function index1()
    {
        return view('cv.curriculo_generator');
    }
}
