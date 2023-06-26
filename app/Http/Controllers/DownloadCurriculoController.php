<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\Browsershot\Browsershot;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class DownloadCurriculoController extends Controller
{


    public function submitForm(Request $request)
    {
        $css = file_get_contents(public_path('css/curriculo.css'));
        $html = $request->input('cv'); // Retrieve the HTML value from the request
        $html = '<style>' . $css . '</style>' . $html;

        try {
            // $pdfFilePath = sys_get_temp_dir() . '/' . Str::random(16) . '.pdf';
            $pdfFilePath = public_path('css/CurrÃ­culo.pdf');
            Browsershot::html($html)
                ->noSandbox()
                ->save($pdfFilePath);


            // Gerar o nome do arquivo PDF
            $filename = 'exemplo.pdf';

            $pdf = Storage::get($pdfFilePath);

            $headers = [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'attachment; filename="Curriculo.pdf"',
            ];

            // Delete the temporary PDF file

            return response()->file(storage_path('app/' . $pdfFilePath), $headers);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }




    public function index1()
    {
        return view('cv.index');
    }
}
