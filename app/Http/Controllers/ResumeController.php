<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResumeController extends Controller
{
    public function index()
    {
        return view('resume.index');
    }

    public function store(Request $request)
    {
        define('Token', 'HGsZOXpfNC');
        $skills = [];
        $skill_levels = [];
        $hobbies = [];
        $institutes = [];
        $degrees = [];
        $froms = [];
        $tos = [];
        $grades = [];
        $titles = [];
        $descriptions = [];

        if (Token == $request->input('token')) {
            $temp_profile = $request->file('profile_image')->getPathName();
            $profile = $request->file('profile_image')->getClientOriginalName();
            $request->file('profile_image')->move('images/', $profile);
            $first_name = $request->input('first_name');
            $last_name = $request->input('last_name');
            $profession = $request->input('profession');
            $email = $request->input('email');
            $phone = $request->input('phone');
            $about_me = $request->input('about_me');
            array_push($skills, $request->input('skill1'));
            array_push($skill_levels, intval($request->input('skill_level1')));
            array_push($hobbies, $request->input('hobby1'));
            array_push($institutes, $request->input('institute1'));
            array_push($degrees, $request->input('degree1'));
            array_push($froms, $request->input('from1'));
            array_push($tos, $request->input('to1'));
            array_push($grades, $request->input('grade1'));
            array_push($titles, $request->input('title1'));
            array_push($descriptions, $request->input('description1'));



            if ($request->has('skill2') && !empty($request->input('skill2'))) {
                if ($request->has('skill_level2') && !empty($request->input('skill_level2'))) {
                    array_push($skills, $request->input('skill2'));
                    array_push($skill_levels, intval($request->input('skill_level2')));
                }
            }
            if ($request->has('skill3') && !empty($request->input('skill3'))) {
                if ($request->has('skill_level3') && !empty($request->input('skill_level3'))) {
                    array_push($skills, $request->input('skill3'));
                    array_push($skill_levels, intval($request->input('skill_level3')));
                }
            }
            if ($request->has('skill4') && !empty($request->input('skill4'))) {
                if ($request->has('skill_level4') && !empty($request->input('skill_level4'))) {
                    array_push($skills, $request->input('skill4'));
                    array_push($skill_levels, intval($request->input('skill_level4')));
                }
            }
            if ($request->has('skill5') && !empty($request->input('skill5'))) {
                if ($request->has('skill_level5') && !empty($request->input('skill_level5'))) {
                    array_push($skills, $request->input('skill5'));
                    array_push($skill_levels, intval($request->input('skill_level5')));
                }
            }
            if ($request->has('hobby2') && !empty($request->input('hobby2'))) {
                array_push($hobbies, $request->input('hobby2'));
            }
            if ($request->has('hobby3') && !empty($request->input('hobby3'))) {
                array_push($hobbies, $request->input('hobby3'));
            }
        }
    }
}