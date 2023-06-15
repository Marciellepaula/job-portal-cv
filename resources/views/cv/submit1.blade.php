<!DOCTYPE html>
<html lang="en">

<head>


    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    {{-- <link rel="stylesheet" href="{{ asset('css1/style.css') }}"> --}}
    <link rel="stylesheet" href="{{ asset('css/app1.css') }}">
    <title><?php echo ucwords($first_name) . ' Resume'; ?></title>

</head>

<body>
    <div class="grid-container">


        <div class="zone-1">
            <div class="user-img">
                <img alt="Foto do perfil" class="preview-avatar-img"
                    src="{{ asset('storage/images1/' . $profile_image) }}" />
            </div>
            <div class="contact-box">
                <span class="user-info-item ">Celular
                    <span class="">{{ $phone }}</span></span>
            </div>
            <span class="user-info-item">Email
                <span class="">{{ $email }}</span></span>

            <div class="nationality">
                <span class="user-info-item">Nacionalidade
                    <span class="">{{ $nationality }} </span></span>
            </div>

            <div class="age">
                <span class="user-info-item">Idade
                    <span class="">{{ $age }}</span></span>
            </div>
            <div class="gender">
                <span class="user-info-item">Gênero
                    <span class="">{{ $gender }}</span></span>
            </div>

            <div class="marital">
                <span class="user-info-item">Estado Civil
                    <span class="">{{ $marital }}</span> </span>
            </div>
            <div class="address">
                <span class="user-info-item user-info--address">Endereço
                    <span class="">{{ $address }}</span> </span>
            </div>
        </div>



        <div class="zone-2">

            <div class="">
                <span class="user-info--name">
                    {{ ucwords($first_name) }}</span>
            </div>

            <div class="group-1">
                <div class="title">
                    <span class="main-section--title">Informações adicionais</span>
                </div>
                <div class="desc">{{ $about_me }}</div>
            </div>

            <div class="group-2">
                <div class="title">
                    <span class="main-section--title academic-preview" style="">Formação acadêmica</span>
                </div>
                <div class="desc">
                    @foreach ($institutes as $index => $institute)
                        <ul>
                            <li>
                                <div class="msg-1">{{ $froms[$index] }} - {{ $tos[$index] }} |
                                    {{ ucwords($degrees[$index]) }}</div>
                                <div class="msg-2">{{ ucwords($institute) }}</div>
                            </li>
                        </ul>
                    @endforeach
                </div>
            </div>


            <div class="desc">
                <div class="group-3">
                    <div class="title">
                        <span class="main-section--title" style="">Experiência</span>
                    </div>
                    <div class="desc">
                        @foreach ($titles as $index => $title)
                            <ul>
                                <li class="list-item--wrap hide experience-block-preview">
                                    <div class="list-line">
                                        <span class="sidebar-item experience-company_office">Cargo</span>
                                        <span
                                            class="list-item list-item--title preview-company_office">{{ ucwords($title) }}</span>
                                    </div>
                                    <div class="list-line">
                                        <span class="sidebar-item experience-company">Empresa</span>
                                        <p class="list-item preview-company">{{ ucwords($companies[$index]) }}
                                        </p>
                                    </div>
                                    <div class="list-line">
                                        <span class="sidebar-item experience-period">Período</span>
                                        <p class="list-item preview-period">
                                            @if ($froms1[$index] != '' && $tos1[$index] == '')
                                                {{ $froms1[$index] . ' - Presente' }}
                                            @else
                                                {{ $froms1[$index] . ' - ' . $tos1[$index] }}
                                            @endif
                                    </div>
                                    <div class="list-line">
                                        <span class="sidebar-item experience-company_functions">Funções</span>
                                        <p class="list-item preview-company_functions">
                                            {{ ucfirst($descriptions[$index]) }}</p>
                                    </div>
                                </li>
                            </ul>
                        @endforeach
                    </div>
                </div>



                <div class="personal-box">
                    <span class="main-section--subtitle">Qualificações e Cursos complementares</span>
                    {{ $others_courses }}
                </div>

            </div>

        </div>
    </div>

</body>

</html>
