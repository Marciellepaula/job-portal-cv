<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.2/html2canvas.min.js"></script>
    <title>Document</title>
</head>

<body>

    <div class="template cv-roma active" data-template-color="dark" data-template-id="roma" style="min-height: 837.469px;">
        <div class="" data-cv-print-area="" style="transform: scale(0.81864); height: 341.524px;">
            <div data-cv-step="step1_preview" class="sidebar">
                <span class="user-img hide">
                    <img class="preview-avatar-img" src="https://cdn.todacarreira.com/img/avatar.jpg"
                        alt="Foto do perfil"></span>
                <link rel="stylesheet" href="{{ asset('css/style.css') }}">
                <div class="user-info">
                    <span class="user-info-item user-info--email">
                        <span data-cv-preview-id="email"></span>
                    </span>
                    <span class="user-info-item user-info--telephone">
                        <span data-cv-preview-id="telephone"></span>
                    </span>
                    <span class="user-info-item user-info--mobile" style="display: none;">
                        <span data-cv-preview-id="mobile"></span>
                    </span>
                    <span class="user-info-item user-info--nationality">
                        <span data-cv-preview-id="nationality"></span>
                    </span>
                    <span class="user-info-item user-info--age" style="display: none;">
                        <span><span data-cv-preview-id="age"></span></span>
                    </span>
                    <span class="user-info-item user-info--gender" style="display: none;">
                        <span data-cv-preview-id="gender"></span>
                    </span>
                    <span class="user-info-item user-info--marital" style="display: none;">
                        <span data-cv-preview-id="marital"></span>
                    </span>
                    <span class="user-info-item user-info--address">
                        <span data-cv-preview-id="address"></span>
                    </span>
                    <span class="user-info-item user-info--cep" style="display: none;">
                        <span data-cv-preview-id="cep"></span>
                    </span>
                </div>
            </div>
            <div class="main">
                <span class="user-info--name" data-cv-preview-id="name"></span>
                <div data-cv-step="step1_2_preview" class="main-section" style="display: none;">
                    <span class="main-section--title"></span>
                    <p data-cv-preview-id="career-goal" class="list-item list-item--large preview-career-goal"></p>
                </div>

                <div data-cv-step="step2_preview" class="main-section">
                    <span data-cv-preview-id="academic" class="main-section--title academic-preview"
                        style="display: none;"></span>
                    <ul>
                        <li class="list-item--wrap academic-block-preview hide">
                            <div class="list-line">
                                <span class="sidebar-item academic-course"></span>
                                <span class="list-item list-item--title preview-course"></span>
                            </div>

                            <div class="list-line">
                                <span class="sidebar-item academic-school"></span>
                                <p class="list-item preview-school academic-school"></p>
                            </div>

                            <div class="list-line">
                                <span class="sidebar-item academic-school_conclusion_year"></span>
                                <p class="list-item preview-school_conclusion_year academic-school_conclusion_year"></p>
                            </div>
                        </li>
                    </ul>
                    <div class="no-break" style="display: none;">
                        <span class="main-section--subtitle"></span>
                        <p data-cv-preview-id="other_courses" class="list-item list-item--large"></p>
                    </div>
                </div>

                <div data-cv-step="step3_preview" class="main-section">
                    <span data-cv-preview-id="experience" class="main-section--title" style="display: none;"></span>
                    <ul>
                        <li class="list-item--wrap hide experience-block-preview">
                            <div class="list-line">
                                <span class="sidebar-item experience-company_office"></span>
                                <span class="list-item list-item--title preview-company_office"></span>
                            </div>

                            <div class="list-line">
                                <span class="sidebar-item experience-company"></span>
                                <p class="list-item preview-company"></p>
                            </div>

                            <div class="list-line">
                                <span class="sidebar-item experience-period"></span>
                                <p class="list-item preview-period"></p>
                            </div>

                            <div class="list-line">
                                <span class="sidebar-item experience-company_functions"></span>
                                <p class="list-item preview-company_functions"></p>
                            </div>
                        </li>
                    </ul>
                    <div class="no-break" style="display: none;">
                        <span class="main-section--subtitle"></span>
                        <p data-cv-preview-id="other_activity" class="list-item list-item--large"></p>
                    </div>
                </div>

                <div data-cv-step="step4_preview" class="main-section">
                    <div class="no-break" style="display: none;">
                        <span class="main-section--title"></span>
                        <p data-cv-preview-id="other_informations" class="list-item list-item--large"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
