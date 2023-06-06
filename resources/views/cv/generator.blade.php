<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Curriculo EmpregoIdeal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css1/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app1.css') }}">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Rest of your code -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>




<body>
    <div class="container-lg">
        <h1 class="text-center my-5 fw-bold">Currículo</h1>
        <div class="form-container smaller">
            <form action="/submit" method="POST" enctype="multipart/form-data" id="form-curriculum">
                @csrf
                <meta name="csrf-token" content="{{ csrf_token() }}">
                <input type="hidden" id="currentStep" value="1">
                <div class="step" id="step1">
                    <legend class="line line-header">
                        <span>1.1 Dados pessoais</span>
                    </legend>
                    <input type="hidden" name="token" value="HGsZOXpfNC">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="avatar m-5">
                                <label for="avatar" class="btn btn-primary custom-button d-sm-inline-block ">
                                    <span class="">
                                        <i class="fas fa-camera me-2"></i>
                                        Adicionar foto
                                    </span>
                                    <input id="avatar" name="profile_image" type="file" style="display: none;">
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <label class="cv-label">Foto do perfil</label>
                            <div class="avatar-img">
                                <img id="avatar-img" src="https://cdn.todacarreira.com/img/avatar.jpg"
                                    data-default="https://cdn.todacarreira.com/img/avatar.jpg" alt="Foto do perfil">
                            </div>
                        </div>
                    </div>

                    <div class=" p-3 mb-3">
                        <h2>Contato</h2>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Primeiro Nome <span class="required-mark">*</span></label>
                                <input type="text" name="first_name" class="form-control-sm " required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Último Nome</label>
                                <input type="text" name="last_name"class="form-control-sm" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control-sm" name="email">
                                <div class="form-text text-light">We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Número</label>
                                <input type="text" class="form-control-sm" id="phone" name="phone"
                                    placeholder="0300-1234567" pattern="[0-9]{4}[0-9]{7}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Nacionalidade</label>
                                <input type="text" class="form-control-sm" id="nationality" name="nationality"
                                    placeholder="">
                            </div>

                            <div class="col-md-6 mb-3">
                                <label class="form-label">Estado Civil</label>
                                <input type="text" class="form-control-sm" id="marital" name="marital">
                            </div>

                            <div class="col-md-6 mb-3">
                                <label class="form-label">Idade</label>
                                <input type="text" class="form-control-sm" id="age" name="age">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Gênero</label>
                                <input type="text" class="form-control-sm" id="gender" name="gender"
                                    placeholder="">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Endereço</label>
                                <input type="text" class="form-control-sm" id="address" name="address"
                                    placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step" id="step2">
                    <div class="col-md-6 mb-3">
                        <h2>Sobre mim</h2>
                    </div>
                    <div class="text-area">
                        <textarea class="input-info" name="about_me" rows="5"></textarea>
                    </div>

                    <div class="col-md-6 mb-3">
                        <h2>Educação</h2>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Universidade</label>
                            <input type="text" name="institute1" class="form-control-sm">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="exampleInputEmail1" class="form-label">Curso</label>
                            <input type="text" name="degree1" class="form-control-sm">
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <div>
                                <label for="exampleInputEmail1" class="form-label">De</label>
                                <input type="text" name="from1" class="form-control-sm">
                            </div>
                            <div>
                                <label for="exampleInputEmail1" class="form-label">Até</label>
                                <input type="text" name="to1" class="form-control-sm">
                            </div>
                        </div>
                        <div id="addEducation"></div>
                        <div class="mb-3">
                            <button type="button" id="education_hide" class="bg-green "
                                onclick="addEducation()">+Adicionar outro curso</button>
                        </div>
                    </div>
                </div>
                <div class="step" id="step3">
                    <legend class="line line-header">
                        <span>Qualificações e Cursos complementares</span>
                    </legend>
                    <div class="text-area">
                        <textarea id="others_courses" class="input-info" name="others_courses" rows="5"></textarea>
                    </div>
                </div>
                <div class="step" id="step4">
                    <div class=" p-3 mb-3">
                        <h2>Experiência</h2>
                        <div class="col-md-6 mb-3">
                            <label for="exampleInputEmail1" class="form-label">Cargo</label>
                            <input type="text" name="title1" class="form-control-sm">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="exampleInputEmail1" class="form-label">Funções</label>
                            <input type="text" name="description1" class="form-control-sm">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="exampleInputEmail1" class="form-label">Empresa</label>
                            <input type="text" name="company1" class="form-control-sm">
                        </div>

                        <div class="mb-3 d-flex justify-content-between">
                            <div>
                                <label for="exampleInputEmail1" class="form-label">De</label>
                                <input type="text" name="from11" class="form-control-sm">
                            </div>
                            <div>
                                <label for="exampleInputEmail1" class="form-label">Até</label>
                                <input type="text" name="to11" class="form-control-sm">
                            </div>
                        </div>
                        <div id="addExperience"></div>
                        <div class="mb-3">
                            <button type="button" id="experience_hide" class="bg-green"
                                onclick="addExperience()">Adicionar experiencia+</button>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="d-flex justify-content-end">
                            <button type="button" id="btnlight" class="btn-secondary m-1"
                                onclick="previousStep()">
                                <i class="fas fa-arrow-left"></i> Voltar
                            </button>
                            <button type="button" id="btndark" class="bg-green m-1" onclick="nextStep()">
                                <i class="fas fa-arrow-right"></i> Avançar
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex justify-content-end">
                            <a class="btn btn-primary bg-gray-200 m-2 btn-lg" id="generatePDFBtn"
                                onclick="showModal()">
                                <i class="fas fa-eye"></i> Ver e baixar
                            </a>
                        </div>
                    </div>
                </div>

                <div id="pdfModal1" class="modal1" tabindex="-1" role="dialog">
                    <div class="modal-dialog1 modal-dialog-scrollable" role="document">
                        <div class="modal-content1">
                            <div class="modal-body1   style="overflow-y: auto;"">
                                <div id="modalData1"></div>
                            </div>
                            <div class="modal-footer1">
                                <a class="btn btn-primary btn-secondary" id="closeModalBtn" onclick="hideModal()">
                                    <i class="fas fa-close"></i> Fechar
                                </a>
                                <button type="submit" class="btn btn-primary btn-info">
                                    <i class="fas fa-file-pdf"></i> Baixar PDF
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>


        <script src="{{ asset('cv/app.js') }}"></script>
    </div>
    </div>
</body>




</html>

<script>
    function showModal() {
        var pdfModal1 = document.getElementById('pdfModal1');
        pdfModal1.style.display = 'block';
    }

    // Function to hide the modal
    function hideModal() {
        document.getElementById("pdfModal1").style.display = "none";
    }

    function previousStep() {
        var currentStep = document.getElementById('currentStep');
        var step = parseInt(currentStep.value);

        if (step > 1) {
            var prevStep = step - 1;
            currentStep.value = prevStep;
            showStep(prevStep);

        }
    }

    function nextStep() {
        var currentStep = document.getElementById('currentStep');
        var step = parseInt(currentStep.value);
        var totalSteps = 4; // Set the total number of steps here

        if (step < totalSteps) {
            var nextStep = step + 1;
            currentStep.value = nextStep;
            showStep(nextStep);
        }
    }

    function showStep(step) {
        var stepElements = document.getElementsByClassName('step');


        for (var i = 0; i < stepElements.length; i++) {
            var stepElement = stepElements[i];
            stepElement.style.display = 'none';
        }

        var currentStepElement = document.getElementById('step' + step);
        if (currentStepElement) {
            currentStepElement.style.display = 'block';
        }

        if (step === 1) {
            btnlight.style.display = 'none';
        } else {
            btnlight.style.display = 'block'
        }
        if (step === 4) {
            btndark.style.display = 'none';
        } else {
            btndark.style.display = 'block'
        }
    }

    // Show the first step initially
    showStep(1);


    // Step Navigation Logic
    function generatePDF() {

        var csrfToken = "{{ csrf_token() }}";

        // Gather the data from the form fields
        var step1Data = {
            first_name: document.querySelector('input[name="first_name"]').value,
            last_name: document.querySelector('input[name="last_name"]').value,
            email: document.querySelector('input[name="email"]').value,
            phone: document.querySelector('input[name="phone"]').value,
            nationality: document.querySelector('input[name="nationality"]').value,
            marital: document.querySelector('input[name="marital"]').value,
            age: document.querySelector('input[name="age"]').value,
            gender: document.querySelector('input[name="gender"]').value,
            address: document.querySelector('input[name="address"]').value,
            profile_image: document.querySelector('input[name="profile_image"]').files[0],
        };

        var educationData = [];
        for (var i = 1; i <= 3; i++) {
            var instituteInput = document.querySelector('input[name="institute' + i + '"]');
            var degreeInput = document.querySelector('input[name="degree' + i + '"]');
            var fromInput = document.querySelector('input[name="from' + i + '"]');
            var toInput = document.querySelector('input[name="to' + i + '"]');

            if (instituteInput && degreeInput && fromInput && toInput) {
                var institute = instituteInput.value || null;
                var degree = degreeInput.value || null;
                var from = fromInput.value || null;
                var to = toInput.value || null;

                var education = {
                    institute: institute,
                    degree: degree,
                    from: from,
                    to: to
                };

                educationData.push(education);
            }
        }


        var step2Data = {
            about_me: document.querySelector('textarea[name="about_me"]').value || null,
            education: educationData
        };

        var step3Data = {
            others_courses: document.querySelector('textarea[name="others_courses"]').value || null
        };

        var workExperienceData = [];
        for (var i = 1; i <= 6; i++) {
            var titleInput = document.querySelector('input[name="title' + i + '"]');
            var descriptionInput = document.querySelector('input[name="description' + i + '"]');
            var companyInput = document.querySelector('input[name="company' + i + '"]');
            var from1Input = document.querySelector('input[name="from1' + i + '"]');
            var to1Input = document.querySelector('input[name="to1' + i + '"]');

            if (titleInput && descriptionInput && companyInput && from1Input && to1Input) {
                var title = titleInput.value || null;
                var description = descriptionInput.value || null;
                var company = companyInput.value || null;
                var from1 = from1Input.value || null;
                var to1 = to1Input.value || null;

                var workExperience = {
                    title: title,
                    description: description,
                    company: company,
                    from1: from1,
                    to1: to1
                };

                workExperienceData.push(workExperience);
            }
        }

        var step4Data = {
            work_experience: workExperienceData
        };




        var formData = new FormData();

        formData.append('step1', JSON.stringify(step1Data));
        formData.append('step2', JSON.stringify(
            step2Data));
        formData.append('step3', JSON.stringify(step3Data));
        formData.append('step4', JSON
            .stringify(step4Data));
        formData.append('profile_image', step1Data
            .profile_image); // Append the image file separately





        // Make an AJAX request to fetch the dynamic data
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var html = response.html;
                document.getElementById("modalData1").innerHTML = html;
                document.getElementById("pdfModal1").style.display = "block";
            }
        };
        xhr.open("POST", 'submit1', true);
        xhr.setRequestHeader("X-CSRF-TOKEN", csrfToken);
        xhr.send(
            formData); // Replace 'example' with your actual data
    }


    // Attach click event listener to the "Generate PDF" button
    var generatePDFBtn = document.getElementById('generatePDFBtn');
    generatePDFBtn.addEventListener('click', generatePDF);

    // Attach click event listener to the modal's close button (assuming there's a close button inside the modal)
    var closeButton = document.getElementById("closeModalBtn");
    closeButton.addEventListener("click", hideModal);
</script>
