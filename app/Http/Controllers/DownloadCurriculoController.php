<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Spatie\Browsershot\Browsershot;

class DownloadCurriculoController extends Controller
{
    public function submitForm(Request $request)
    {

        $css = file_get_contents(public_path('css/curriculo.css'));
        $html = $request->input('cv');
        $css .= "
        
            footer {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 20mm;
                background-color: black;
                color: #ffffff;
                padding: 10px;
            }
        ";


        $html = '<style>' . $css . '</style>';
        $html .= '';
        $html .= '<div class="body">' . $request->input('cv') . '</div>';
        $html .= '<footer>My Custom Footer</footer>';

        $pdf = Browsershot::html($html)
            ->format('A4')
            ->showBackground()
            ->showBrowserHeaderAndFooter()
            ->headerHtml('$html')
            ->footerHtml('$html')
            ->pdf();

        $headers = [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="mypdf.pdf"',
        ];

        return response($pdf, 200, $headers);
    }




    public function index1()
    {
        return view('cv.index');
    }
}
