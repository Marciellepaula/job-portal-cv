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
    <link rel="stylesheet" href="{{ asset('css/stylebtn.css') }}">

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
                        <div class="input-group mb-10">
                            <label class="cv-label">Foto do perfil</label>
                            <div class="avatar-wrap">
                                <label for="avatar" class="form-btn form-btn-add--item"><span><i></i>Adicionar
                                        foto</span></label>
                                <input id="avatar" name="profile_image" type="file" onchange="profilePic();">
                                <div class="avatar-img">
                                    <img id="avatar-img" src="https://cdn.todacarreira.com/img/avatar.jpg"
                                        data-default="https://cdn.todacarreira.com/img/avatar.jpg" alt="Foto do perfil">
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class=" p-3 mb-3">
                        <div class="row">
                            <div class="input-group full-w mt-15">
                                <label class="cv-label">Primeiro Nome <span class="required-mark">*</span></label>
                                <input type="text" name="first_name" class="input-info" required>
                            </div>
                            <div class="input-group">
                                <label class="cv-label">Último Nome</label>
                                <input type="text" name="last_name"class="input-info" required>
                            </div>
                            <div class="input-group">
                                <label class="cv-label" for="email">Email <span
                                        class="required-mark">*</span></label>
                                <input type="email" maxlength="70" id="email" class="input-info" name="email"
                                    required="" value="" placeholder="Coloque um email válido"><span
                                    class="cv-error"></span>
                            </div>

                            <div class="input-group float-r">
                                <label class="cv-label" for="mobile">Celular</label>
                                <input maxlength="20" id="phone" class="input-info" name="phone" value=""
                                    placeholder="(00) 12345-6789"><span class="cv-error"></span>
                            </div>
                            <div class="input-group float-r">
                                <label class="cv-label">Nacionalidade</label>
                                <input type="text" class="input-info" id="nationality" name="nationality"
                                    placeholder="">
                            </div>

                            <div class="input-group float-w">
                                <label class="cv-label">Estado Civil</label>
                                <input type="text" class="input-info" id="marital" name="marital">
                            </div>

                            <div class="input-group float-l">
                                <div class="table">
                                    <div class="table-cell table-cell--quarter">
                                        <label class="cv-label" for="age">Idade</label>
                                        <input name="age" id="age" class="input-info" min="1"
                                            max="200" type="number" value=""><span
                                            class="cv-error"></span>
                                    </div>

                                    <div class="table-cell">
                                        <label class="cv-label" for="gender">Gênero</label>
                                        <div class="input-info--wrap">
                                            <input name="gender" id="gender" class="input-info">
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="input-group">
                                <label class="cv-label">Endereço</label>
                                <input type="text" class="input-info" id="address" name="address"
                                    placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step" id="step2">
                    <legend class="line line-header">
                        <span>1.2 Informações adicionais</span>
                    </legend>
                    <div class="line_courses form-row-list">
                        <h2>Informações adicionais</h2>
                        <div class="text-area">
                            <textarea class="input-info" name="about_me" rows="5"></textarea>
                        </div>
                        <legend class="line line-header">
                            <span>2.1 Formação acadêmica</span>
                        </legend>
                        <div class="input-group full-w">
                            <div class="trash-can">
                                <i class="fas fa-trash-alt" onclick="clearInputs()"></i>
                            </div>
                            <label for="exampleInputEmail1" class="cv-label">Curso</label>
                            <input maxlength="200" type="text" name="degree1" class="input-info">
                        </div>
                        <div class="input-group full-w">
                            <div class="table">
                                <label for="exampleInputEmail1" class="cv-label">Universidade</label>
                                <input maxlength="200" type="text" name="institute1" class="input-info">
                            </div>
                            <div class="input-group">
                                <div class="table">
                                    <div class="table-cell table-cell--quarter">
                                        <label class="cv-label" for="exampleInputEmail1">Início em</label>
                                        <input type="number" name="from1" class="input-info" type="number"
                                            placeholder="2022" min="1900" max="2023" value="">
                                    </div>

                                    <div class="table-cell table-cell--quarter">
                                        <label for="exampleInputEmail1" class="cv-label">Fim em</label>
                                        <input type="number" name="to1" type="number" class="input-info"
                                            placeholder="" min="1970" max="2023" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="addEducation"></div>
                    <div class="mb-3">
                        <button type="button" id="education_hide" class="bg-green " onclick="addEducation()">+
                            Adicionar outro curso</button>
                    </div>
                </div>
                <div class="step" id="step3">
                    <legend class="line line-header">
                        <span>2.2 Cursos complementares</span>
                    </legend>

                    <div class="input-group full-w mt-15">
                        <div class="text-area">
                            <textarea id="others_courses" class="input-info" name="others_courses" rows="5"></textarea>
                        </div>
                        <span class="cv-error"></span>
                    </div>
                </div>

                <div class="step" id="step4">
                    <legend class="line line-header">
                        <span>3.1 Experiência</span>
                    </legend>
                    <div class="input-group">
                        <label for="exampleInputEmail1" class="cv-label">Cargo</label>
                        <input type="text" name="title1" class="input-info">
                    </div>

                    <div class="input-group full-w">
                        <label class="cv-label" for="">Descrição das suas funções na empresa</label>
                        <textarea id="description1" class="input-info" name="description1" rows="3" cols="30"></textarea>
                    </div>

                    <div class="input-group full-w mt-15">
                        <label for="exampleInputEmail1" class="cv-label">Empresa</label>
                        <input type="text" name="company1" class="input-info">
                    </div>

                    <div class="input-group">
                        <div class="table">
                            <div class="table-cell table-cell--quarter">
                                <label class="cv-label" for="company_begin">Início em</label>
                                <input id="from11" class="input-info" name="from11" type="number"
                                    placeholder="2022" min="1900" max="2023" value="">
                            </div>
                            <div class="table-cell table-cell--quarter">
                                <label class="cv-label" for="company_end">Fim em</label>
                                <input id="to11" class="input-info" name="to11" type="number"
                                    placeholder="2024" min="1970" max="2024" value="">
                            </div>
                        </div>

                        <div class="input-checkbox mt-15">
                            <input type="checkbox" id="work_present" name="work_present"
                                onclick="disableEndDateInput()" value="">
                            <span class="checkmark"></span>
                            <label class="cv-label" for="work_present">Trabalho atualmente nesta empresa.</label>
                        </div>
                    </div>

                    <div id="addExperience"></div>
                    <div class="mb-3">
                        <button type="button" id="experience_hide" class="bg-green"
                            onclick="addExperience()">Adicionar
                            experiencia+</button>

                    </div>
                </div>



                {{-- <div class="curriculum-footer">
                    <div class="input-row full-w hidden-mobile">
                        <div class="align-r">
                            <div class="form-btn form-btn--reset">
                                <i></i>
                                <input id="btnResetForm" type="button" value="Recomeçar" title="Recomeçar">
                            </div>

                            <div class="form-btn form-btn--previous">
                                <i></i>
                                <input id="btnPrevious" type="button" value="Anterior" title="Pág. anterior"
                                    class="">
                            </div>
                            <div class="form-btn form-btn--next">
                                <i></i>
                                <input id="btnNext" type="button" value="Seguinte" title="Pág. seguinte"
                                    class="">       ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
                            </div>
                        </div>
                    </div>

                    <div class="input-row align-r flex-container">
                        <div class="form-btn form-btn--xl form-btn--preview flex-item">
                            <i></i>
                            <input id="btnPreview" type="button" value="Ver e baixar">
                        </div>
                    </div>
                    <div class="form-btn form-btn--reset hidden-desktop">
                        <i></i>
                        <input id="btnResetFormMobile" type="button" value="Recomeçar" title="Recomeçar">
                    </div>
                </div> --}}







                <div class="curriculum-footer">
                    <div class="input-row full-w hidden-mobile">
                        <div class="align-r">
                            <div class="form-btn form-btn--reset">
                                <i></i>
                                <input id="btnResetForm" type="button" value="Recomeçar" title="Recomeçar">
                            </div>

                            <div class="form-btn form-btn--previous">
                                <i></i>
                                <input id="btnPrevious" type="button" value="Anterior" title="Pág. anterior"
                                    class="" onclick="previousStep()">
                            </div>
                            <div class="form-btn form-btn--next">
                                <i></i>
                                <input id="btnNext" type="button" value="Seguinte" title="Pág. seguinte"
                                    class="" onclick="nextStep()">
                            </div>
                        </div>
                    </div>

                    <div class="input-row align-r flex-container">
                        <div class="form-btn form-btn--xl form-btn--preview flex-item">
                            <i></i>
                            <input id="btnPreview" type="button" value="Ver e baixar">
                        </div>
                    </div>
                    <div class="form-btn form-btn--reset hidden-desktop">
                        <i></i>
                        <input id="btnResetFormMobile" type="button" value="Recomeçar" title="Recomeçar">
                    </div>
                </div>













                {{-- <div class="container">
                    <div class="row">
                        <a class="btn btn-primary bg-gray-200 m-2 btn-lg" id="generatePDFBtn" onclick="showModal()">
                            <i class="fas fa-eye"></i> Ver e baixar
                        </a>
                    </div>
                </div> --}}


                {{-- 
                <div class="container">
                    <div class="row">
                        <div class="col-12 d-flex flex-column align-items-center">
                            <button type="button" id="btnlight" class="btn btn-secondary m-1"
                                onclick="previousStep()">
                                <i class="fas fa-arrow-left"></i> Voltar
                            </button>
                            <button type="button" id="btndark" class="btn btn-success m-1" onclick="nextStep()">
                                <i class="fas fa-arrow-right"></i> Avançar
                            </button>

                            <a class="btn btn-primary bg-gray-200 m-2 btn-lg" id="generatePDFBtn"
                                onclick="showModal()">
                                <i class="fas fa-eye"></i> Ver e baixar
                            </a>
                        </div>
                    </div>
                </div> --}}


                <div id="pdfModal1" class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">

                        <div class="modal-content">
                            <div class="modal-header">
                                <a class="btn btn-primary btn-secondary" id="closeModalBtn" onclick="hideModal()">
                                    <i class="fas fa-close"></i> Fechar
                                </a>
                                <button type="submit" class="btn btn-primary btn-info">
                                    <i class="fas fa-file-pdf"></i> Baixar PDF
                                </button>
                            </div>
                            <div class="modal-body style="overflow-y: auto;"">
                                <div id="modalData1"></div>
                            </div>
                            <div class="modal-footer">
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
</body>



</html>

<script>
    function clearInputs() {
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
    }


    function disableEndDateInput() {
        var endDateInput = document.getElementById("to11");
        var checkbox = document.getElementById("work_present");

        if (checkbox.checked) {
            endDateInput.value = "";
            endDateInput.disabled = true;
        } else {
            endDateInput.disabled = false;
        }
    }

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
        for (var i = 1; i <= education_count; i++) {
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

                if (institute != null && degree != null && from != null && to != null) {
                    educationData.push(education);
                }
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
        for (var i = 1; i <= experience_count; i++) {
            var titleInput = document.querySelector('input[name="title' + i + '"]');
            var descriptionInput = document.querySelector('textarea[name="description' + i + '"]');
            var companyInput = document.querySelector('input[name="company' + i + '"]');
            var from1Input = document.querySelector('input[name="from1' + i + '"]');
            var to1Input = document.querySelector('input[name="to1' + i + '"]');

            if (titleInput && descriptionInput && companyInput && from1Input && to1Input) {
                var title = titleInput.value || null;
                var description = descriptionInput.value || null;
                var company = companyInput.value || null;
                var from1 = from1Input.value || null;
                var to1 = to1Input.value || null;

                console.log(from1);

                var workExperience = {
                    title: title,
                    description: description,
                    company: company,
                    from1: from1,
                    to1: to1
                };

                if (title != null && description != null && company != null && from1 != null) {
                    workExperienceData.push(workExperience);
                }

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

       e = new FormData();
        e.append("cv", a.outerHTML);
        $step1Data = json_decode($request->step1, true);
        $step2Data = json_decode($request->step2, true);
        $step3Data = json_decode($request->step3, true);
        $step4Data = json_decode($request->step4, true);
        // Access individual fields from step1Data
        $profile_image = $request->file('profile_image');
        $first_name = $step1Data['first_name'];
        $last_name = $step1Data['last_name'];
        $email = $step1Data['email'];


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
        xhr.send(formData); // Replace 'example' with your actual data
    }


    // Attach click event listener to the "Generate PDF" button
    var generatePDFBtn = document.getElementById('generatePDFBtn');
    generatePDFBtn.addEventListener('click', generatePDF);

    // Attach click event listener to the modal's close button (assuming there's a close button inside the modal)
    var closeButton = document.getElementById("closeModalBtn");
    closeButton.addEventListener("click", hideModal);
</script>
