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
            $pdfFilePath = 'pdf/' . Str::random(16) . '.pdf'; // Path to store the PDF file in the storage directory

            Browsershot::html($html)
                ->noSandbox()
                ->save(storage_path('app/pdf/' . $pdfFilePath));


            $pdfContents = Storage::disk('local')->download('app/pdf/' . $pdfFilePath, $pdfFilePath);
            // Delete the PDF file from storage
            // Storage::disk('local')->delete($pdfFilePath);

            $headers = [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'attachment; filename="Curriculo.pdf"',
            ];

            return response($pdfContents, 200, $headers);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }




    public function index1()
    {
        return view('cv.index');
    }
}
