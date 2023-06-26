<?php

use App\Http\Controllers\Controller;
use Dompdf\Dompdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Element extends Controller
{
    public function processForm(Request $request)
    {
        $cv = $request->input('cv');

        // Generate PDF from the CV HTML
        $dompdf = new Dompdf();
        $dompdf->loadHtml($cv);
        $dompdf->render();
        $pdfContents = $dompdf->output();

        // Save the PDF to storage or download it directly
        Storage::put('cv.pdf', $pdfContents);

        // Return a response or redirect as needed
        return response()->download(storage_path('cv.pdf'))->deleteFileAfterSend();
    }
}
