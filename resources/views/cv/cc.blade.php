<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Curriculo EmpregoIdeal</title>

</head>

<body>

    <div class="user-info">
        <span class="user-info-item user-info--email">Email
            <span>{{ $email }}</span>
        </span>
        <span class="user-info-item user-info--telephone">Telefone Residêncial
            <span>{{ $telephone }}</span>
        </span>
        <span class="user-info-item user-info--mobile">Celular
            <span>{{ $mobile }}</span>
        </span>
        <span class="user-info-item user-info--nationality">Nacionalidade
            <span>{{ $nationality }}</span>
        </span>
        <span class="user-info-item user-info--age">Idade
            <span><span>{{ $age }}</span> anos</span>
        </span>
        <span class="user-info-item user-info--gender">Gênero
            <span>{{ $gender }}</span>
        </span>
        <span class="user-info-item user-info--marital">Estado Civil
            <span>{{ $marital }}</span>
        </span>
        <span class="user-info-item user-info--address">Endereço
            <span>{{ $address }}</span>
        </span>
        <span class="user-info-item user-info--cep">CEP
            <span>{{ $cep }}</span>
        </span>
    </div>

    <div class="main">
        <span class="user-info--name">{{ $name }}</span>
        <div data-cv-step="step1_2_preview" class="main-section">
            <span class="main-section--title">Objetivo</span>
            <p data-cv-preview-id="career-goal" class="list-item list-item--large preview-career-goal">
                {{ $careerGoal }}</p>
        </div>

        <div data-cv-step="step2_preview" class="main-section">
            <span data-cv-preview-id="academic" class="main-section--title academic-preview">Formação
                acadêmica</span>
            <ul>
                @foreach ($academicCourses as $course)
                    <li class="list-item--wrap academic-block-preview hide">
                        <div class="list-line">
                            <span class="sidebar-item academic-course">Curso</span>
                            <span class="list-item list-item--title preview-course">{{ $course['course'] }}</span>
                        </div>

                        <div class="list-line">
                            <span class="sidebar-item academic-school">Instituição</span>
                            <p class="list-item preview-school academic-school">{{ $course['school'] }}</p>
                        </div>

                        <div class="list-line">
                            <span class="sidebar-item academic-school_conclusion_year">Conclusão</span>
                            <p class="list-item preview-school_conclusion_year academic-school_conclusion_year">
                                {{ $course['conclusionYear'] }}</p>
                        </div>
                    </li>
                @endforeach
            </ul>
            <div class="no-break">
                <span class="main-section--subtitle">Qualificações e Cursos complementares</span>
                <p data-cv-preview-id="other_courses" class="list-item list-item--large">{{ $otherCourses }}</p>
            </div>
        </div>

        <div data-cv-step="step3_preview" class="main-section">
            <span data-cv-preview-id="experience" class="main-section--title">Experiência</span>
            <ul>
                @foreach ($experiences as $experience)
                    <li class="list-item--wrap hide experience-block-preview">
                        <div class="list-line">
                            <span class="sidebar-item experience-company_office">Cargo</span>
                            <span
                                class="list-item list-item--title preview-company_office">{{ $experience['position'] }}</span>
                        </div>

                        <div class="list-line">
                            <span class="sidebar-item experience-company">Empresa</span>
                            <p class="list-item preview-company">{{ $experience['company'] }}</p>
                        </div>

                        <div class="list-line">
                            <span class="sidebar-item experience-period">Período</span>
                            <p class="list-item preview-period">{{ $experience['period'] }}</p>
                        </div>

                        <div class="list-line">
                            <span class="sidebar-item experience-company_functions">Funções</span>
                            <p class="list-item preview-company_functions">{{ $experience['functions'] }}</p>
                        </div>
                    </li>
                @endforeach
            </ul>
            <div class="no-break">
                <span class="main-section--subtitle">Atividades complementares</span>
                <p data-cv-preview-id="other_activity" class="list-item list-item--large">{{ $otherActivity }}</p>
            </div>
        </div>

        <div data-cv-step="step4_preview" class="main-section">
            <div class="no-break">
                <span class="main-section--title">Informações adicionais</span>
                <p data-cv-preview-id="other_informations" class="list-item list-item--large">
                    {{ $otherInformations }}</p>
            </div>
        </div>
    </div>

</body>
