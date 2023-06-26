<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\Browsershot\Browsershot;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class DownloadCurriculoController extends Controller
{




    // public function submitForm(Request $request)
    // {
    //     $css = file_get_contents(public_path('css/curriculo.css'));
    //     $html = $request->input('cv'); // Retrieve the HTML value from the request
    //     $html = '<style>' . $css . '</style>' . $html;

    //     try {
    //         $pdfFilePath = public_path('css/example.pdf');


    //         Browsershot::html($html)
    //             ->noSandbox()
    //             ->save($pdfFilePath);

    //         $pdf = file_get_contents($pdfFilePath);

    //         $headers = [
    //             'Content-Type' => 'application/pdf',
    //             'Content-Disposition' => 'attachment; filename="example.pdf"',
    //         ];

    //         return response($pdf, 200, $headers);
    //     } catch (\Exception $e) {
    //         // Log or print the exception message for debugging
    //         dd($e->getMessage());
    //     }
    // }

    public function submitForm(Request $request)
    {
        $css = file_get_contents(public_path('css/curriculo.css'));
        $html = $request->input('cv'); // Retrieve the HTML value from the request
        $html = '<style>' . $css . '</style>' . $html;

        try {
            $pdfFilePath = 'pdf/' . Str::random(16) . '.pdf'; // Path to store the PDF file in the storage directory

            Browsershot::html($html)
                ->noSandbox()
                ->save(storage_path('app/pdf/' . $pdfFilePath));

            $pdf = Storage::get($pdfFilePath);

            $headers = [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'attachment; filename="Curriculo.pdf"',
            ];

            return response($pdf, 200, $headers);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }




    public function index1()
    {
        return view('cv.index');
    }
}
