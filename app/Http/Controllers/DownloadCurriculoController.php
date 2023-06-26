<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\Browsershot\Browsershot;
use Spatie\TemporaryDirectory\TemporaryDirectory;

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
                'Content-Disposition' => 'attachment; filename="CurrÃ­culo.pdf"',
            ];

            // Delete the temporary PDF file


            return response()->download($pdfFilePath, 'example.pdf', $headers)
                ->deleteFileAfterSend(true);
        } catch (\Exception $e) {
            // Log or print the exception message for debugging
            dd($e->getMessage());
        }
    }




    public function index1()
    {
        return view('cv.index');
    }
}
