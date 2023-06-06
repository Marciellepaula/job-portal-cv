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
            <div class="toCenter">
                <img class="profile" src="{{ asset('storage/images1/' . $profile_image) }}" />
            </div>
            <div class="contact-box">
                <span class="user-info-item">Celular</span>
                <div class="text">{{ $phone }}</div>
            </div>
            <span class="user-info-item">Email</span>
            <div class="text">{{ $email }}</div>

            <div class="nationality">
                <span class="user-info-item">Nacionalidade</span>
                <div class="text">{{ $nationality }}</div>
            </div>
            <div class="age">
                <span class="user-info-item">Idade</span>
                <div class="text">{{ $age }}</div>
            </div>
            <div class="gender">
                <span class="user-info-item">Gênero</span>
                <div class="text">{{ $gender }}</div>
            </div>
            <div class="marital">
                <span class="user-info-item">Estado Civil</span>
                <div class="text">{{ $marital }}</div>
            </div>
            <div class="address">
                <span class="user-info-item user-info--address">Endereço</span>
                <div class="text">{{ $address }}</div>
            </div>
        </div>



        <div class="zone-2">

            <div class="headTitle">
                <h1><br><br />{{ ucwords($first_name) }} {{ ucwords($last_name) }} <br><br /></h1>
            </div>

            <div class="group-1">
                <div class="title">
                    <div class="box">
                        <h2>Sobre mim</h2>
                    </div>
                </div>
                <div class="desc">{{ $about_me }}</div>
            </div>

            <div class="group-2">
                <div class="title">
                    <div class="box">
                        <h2>Educação</h2>
                    </div>
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
                        <div class="box">
                            <h2>Experiencia</h2>
                        </div>
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
                                        <p class="list-item preview-company">{{ ucwords($companies[$index]) }}</p>
                                    </div>
                                    <div class="list-line">
                                        <span class="sidebar-item experience-period">Período</span>
                                        <p class="list-item preview-period">
                                            {{ $froms1[$index] . ' - ' . $tos1[$index] }}</p>
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
                    <div class="title">
                        <h2>Cursos Complementares</h2>
                    </div>
                    {{ $others_courses }}
                </div>

            </div>

        </div>
    </div>

</body>

</html>
