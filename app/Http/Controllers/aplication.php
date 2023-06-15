<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class aplication
{
    public function submitForm(Request $request)
    {
        // Validate the form inputs
        $validatedData = $request->validate([
            'name' => 'required|max:200',
            'email' => 'required|email|max:70',
            'avatar' => 'image|max:2048',
            'nationality' => 'nullable|max:50',
            'age' => 'nullable|integer|min:1|max:200',
            'gender' => 'nullable|in:Masculino,Feminino',
            'marital' => 'nullable|in:Solteiro(a),Casado(a),Divorciado(a),Viúvo(a),Separado(a)',
            'telephone' => 'nullable|max:20',
            'mobile' => 'nullable|max:20',
            'address' => 'nullable|max:200',
            'city' => 'nullable|max:100',
            'state' => 'nullable|max:40',
            'cep' => 'nullable|regex:/^\d{5}-\d{3}$/',
            'career-goal' => 'nullable|max:255',
            'course.*' => 'nullable|max:200',
            'school.*' => 'nullable|max:200',
            'school_conclusion_year.*' => 'nullable|integer|min:1900',
            'other_courses' => 'nullable|max:255',
            'company.*' => 'nullable|max:100',
            'company_begin.*' => 'nullable|integer|min:1900|max:2023',
            'company_end.*' => 'nullable|integer|min:1970|max:2023',
            'company_office.*' => 'nullable|max:200',
            'company_functions.*' => 'nullable|max:255',
            'other_activity' => 'nullable|max:255',
        ]);

        // Process the form data
        $cv = new CurriculumVitae();
        $cv->name = $request->input('name');
        $cv->email = $request->input('email');
        $cv->avatar = $request->file('avatar')->store('avatars'); // Assuming 'avatar' is the name of the file input field
        $cv->nationality = $request->input('nationality');
        $cv->age = $request->input('age');
        $cv->gender = $request->input('gender');
        $cv->marital_status = $request->input('marital');
        $cv->telephone = $request->input('telephone');
        $cv->mobile = $request->input('mobile');
        $cv->address = $request->input('address');
        $cv->city = $request->input('city');
        $cv->state = $request->input('state');
        $cv->cep = $request->input('cep');
        $cv->career_goal = $request->input('career-goal');
        $cv->other_courses = $request->input('other_courses');
        $cv->other_activity = $request->input('other_activity');

        // Store courses and schools
        $courses = $request->input('course');
        $schools = $request->input('school');
        $conclusionYears = $request->input('school_conclusion_year');

        if ($courses && $schools && $conclusionYears) {
            foreach ($courses as $index => $course) {
                $schoolData = [
                    'course' => $course,
                    'school' => $schools[$index],
                    'conclusion_year' => $conclusionYears[$index],
                ];
                $cv->schools()->create($schoolData);
            }
        }

        // Store work experiences
        $companies = $request->input('company');
        $beginYears = $request->input('company_begin');
        $endYears = $request->input('company_end');
        $offices = $request->input('company_office');
        $functions = $request->input('company_functions');

        if ($companies && $beginYears && $endYears && $offices && $functions) {
            foreach ($companies as $index => $company) {
                $companyData = [
                    'company' => $company,
                    'begin_year' => $beginYears[$index],
                    'end_year' => $endYears[$index],
                    'office' => $offices[$index],
                    'functions' => $functions[$index],
                ];
                $cv->workExperiences()->create($companyData);
            }
        }

        // Save the curriculum vitae
        $cv->save();

        // Redirect back with a success message
        return redirect()->back()->with('success', 'Curriculum Vitae submitted successfully!');
    }
}
