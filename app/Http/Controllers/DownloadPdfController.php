<?php

namespace App\Http\Controllers;

use Dompdf\Dompdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

use Illuminate\Support\Facades\Storage;

class DownloadPdfController extends Controller
{
    // Create options object for Dompdf
    public function create()
    {
        return view('cv.generator');
    }

    public function submit(Request $request)
    {
        // Extract basic data from the request
        $data = $request->only([
            'first_name',
            'last_name',
            'email',
            'phone',
            'about_me',
            'nationality',
            'age',
            'gender',
            'marital',
            'address',
            'others_courses',
        ]);

        // Arrays to store education details
        $institutes = [];
        $degrees = [];
        $froms = [];
        $tos = [];

        // Arrays to store work experience details
        $titles = [];
        $descriptions = [];
        $froms1 = [];
        $tos1 = [];
        $companies = [];

        // Loop through education section (up to 3 entries)
        for ($i = 1; $i <= 3; $i++) {
            $instituteKey = 'institute' . $i;
            $degreeKey = 'degree' . $i;
            $fromKey = 'from' . $i;
            $toKey = 'to' . $i;

            // Check if all required fields are filled
            if ($request->filled($instituteKey) && $request->filled($degreeKey) && $request->filled($fromKey) && $request->filled($toKey)) {
                // Collect education data
                $institutes[] = $request->input($instituteKey);
                $degrees[] = $request->input($degreeKey);
                $froms[] = $request->input($fromKey);
                $tos[] = $request->input($toKey);
            }
        }


        for ($i = 1; $i <= 6; $i++) {
            $fromKey = 'from1' . $i;
            $toKey = 'to1' . $i;
            $companyKey = 'company' . $i;
            $titleKey = 'title' . $i;
            $descriptionKey = 'description' . $i;

            // Check if all required fiel$request->filled($fromKey) ds are filled
            if ($request->filled($titleKey)  && $request->filled($descriptionKey)  &&  $request->filled($fromKey) && $request->filled($toKey) && $request->filled($companyKey)) {
                // Collect work experience data
                $froms1[] = $request->input($fromKey);
                $tos1[] = $request->input($toKey);
                $companies[] = $request->input($companyKey);
                $titles[] = $request->input($titleKey);
                $descriptions[] = $request->input($descriptionKey);
            }
        }

        // Handle profile image upload
        $profile_image = $request->file('profile_image');
        $profile_image_name = null;

        if ($profile_image) {
            $profile_image_name = $profile_image->hashName();
            Storage::put('public/images/' . $profile_image_name, file_get_contents($profile_image));
        }

        // Add collected data to the $data array


        $data['profile_image'] = $profile_image_name ?? null;
        $data['institutes'] = $institutes ?? [];
        $data['degrees'] = $degrees ?? [];
        $data['froms'] = $froms ?? [];
        $data['tos'] = $tos ?? [];
        $data['titles'] = $titles ?? [];
        $data['description'] = $descriptions ?? [];
        $data['froms1'] = $froms1 ?? [];
        $data['tos1'] = $tos1 ?? [];
        $data['companies'] = $companies ?? [];






        // Generate and stream the PDF
        return \PDF::loadView('cv.submit', $data)->stream('example.pdf');
    }






    public function submit1(Request $request)
    {
        $step1Data = json_decode($request->input('step1'), true);
        $step2Data = json_decode($request->input('step2'), true);
        $step3Data = json_decode($request->input('step3'), true);
        $step4Data = json_decode($request->input('step4'), true);
        // Access individual fields from step1Data
        $profile_image = $request->file('profile_image');
        $first_name = $step1Data['first_name'];
        $last_name = $step1Data['last_name'];
        $email = $step1Data['email'];
        $phone = $step1Data['phone'];
        $nationality = $step1Data['nationality'];
        $marital = $step1Data['marital'];
        $age = $step1Data['age'];
        $gender = $step1Data['gender'];
        $address = $step1Data['address'];



        // Access individual fields from step2Data
        $about_me = $step2Data['about_me'] ?? '';
        $institutes = [];
        $degrees = [];
        $froms = [];
        $tos = [];

        $institutes[] = $step2Data['institute1'] ?? '';
        $degrees[] = $step2Data['degree1'] ?? '';
        $froms[] = $step2Data['from1'] ?? '';
        $tos[] = $step2Data['to1'] ?? '';

        // Access individual fields from step3Data
        $others_courses = $step3Data['others_courses'] ?? '';
        $titles = [];
        $descriptions = [];
        $froms1 = [];
        $tos1 = [];
        $companies = [];

        $titles[] = $step4Data['title1'] ?? '';
        $descriptions[] = $step4Data['description1'] ?? '';
        $froms1[] = $step4Data['from11'] ?? '';
        $tos1[] = $step4Data['to11'] ?? '';
        $companies[] = $step4Data['company1'] ?? '';

        for ($i = 1; $i <= 3; $i++) {
            $instituteKey = 'institute' . $i;
            $degreeKey = 'degree' . $i;
            $fromKey = 'from' . $i;
            $toKey = 'to' . $i;


            $institutes[] = $step2Data['institute' . $i] ?? '';
            $degrees[] = $step2Data['degree'] ?? '';
            $froms[] = $step2Data['from'] ?? '';
            $tos[] = $step2Data['to'] ?? '';
        }


        // Loop through education section (up to 3 entries)
        for ($i = 1; $i <= 3; $i++) {
            $instituteKey = 'institute' . $i;
            $degreeKey = 'degree' . $i;
            $fromKey = 'from' . $i;
            $toKey = 'to' . $i;

            // Check if all required fields are filled
            if ($request->filled($instituteKey) && $request->filled($degreeKey) && $request->filled($fromKey) && $request->filled($toKey)) {
                // Collect education data
                $institutes[] = $request->input($instituteKey);
                $degrees[] = $request->input($degreeKey);
                $froms[] = $request->input($fromKey);
                $tos[] = $request->input($toKey);
            }
        }

        // Loop through work experience section (up to 3 entries)
        for ($i = 1; $i <= 6; $i++) {
            $fromKey = 'from1' . $i;
            $toKey = 'to1' . $i;
            $companyKey = 'company' . $i;

            // Check if all required fields are filled
            if ($request->filled($fromKey) && $request->filled($toKey) && $request->filled($companyKey)) {
                // Collect work experience data
                $froms1[] = $request->input($fromKey);
                $tos1[] = $request->input($toKey);
                $companies[] = $request->input($companyKey);
            }
        }

        if ($profile_image) {
            $profile_image_name = $profile_image->hashName();
            Storage::put('public/images1/' . $profile_image_name, file_get_contents($profile_image));
        } else {
            $profile_image_name = null;
        }


        $data = [
            'profile_image' => $profile_image_name,
            'first_name' => $first_name,
            'last_name' => $last_name,
            'email' => $email,
            'phone' => $phone,
            'institutes' => $institutes,
            'degrees' => $degrees,
            'froms' => $froms,
            'tos' => $tos,
            'titles' => $titles,
            'descriptions' => $descriptions,
            'froms1' => $froms1,
            'tos1' => $tos1,
            'companies' => $companies,
            'about_me' =>  $about_me,
            'nationality' =>  $nationality,
            'age' => $age,
            'gender' => $gender,
            'marital' => $marital,
            'address' => $address,
            'others_courses' => $others_courses
        ];

        $html = view('cv.submit1', $data)->render();  //  

        return response()->json(['html' => $html]);
    }




    public function index1()
    {
        return view('cv.curriculo_generator');
    }
}
