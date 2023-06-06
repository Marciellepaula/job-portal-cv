
var education_count = 1;
var experience_count = 1;


function addEducation() {
    let addEducation = document.getElementById('addEducation');
    let educationHide = document.getElementById('education_hide');
    if (education_count < 3) {
        ++education_count;
        var field =
            `<div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Universidade</label>
        <input type="text" name="institute${education_count}" class="form-control-sm">
    </div>
    <div class="col-md-6 mb-3">
        <label for="exampleInputEmail1" class="form-label">Curso</label>
        <input type="text" name="degree${education_count}" class="form-control-sm">
    </div>
    <div class="mb-3 d-flex justify-content-between">
        <div>
            <label for="exampleInputEmail1" class="form-label">De</label>
            <input type="text" name="from${education_count}" class="form-control-sm">
        </div>
        <div>
            <label for="exampleInputEmail1" class="form-label">Até</label>
            <input type="text" name="to${education_count}" class="form-control-sm">
        </div>
    </div>
       `;
        var htmlObject = document.createElement('div');
        htmlObject.innerHTML = field;
        addEducation.insertAdjacentElement("beforeend", htmlObject);
    }
    if (education_count == 3) {
        educationHide.style = "display:none";
    }
}


function addExperience() {
    let addExperience = document.getElementById('addExperience');
    let experienceHide = document.getElementById('experience_hide');
    if (experience_count < 6) {
        ++experience_count;
        var field =
            `<div class="col-md-6 mb-3">
            <label for="exampleInputEmail1" class="form-label">Cargo</label>
            <input type="text" name="title${experience_count}" class="form-control-sm">
        </div>

        <div class="col-md-6 mb-3">
            <label for="exampleInputEmail1" class="form-label">Funções</label>
            <input type="text"  name="description${experience_count}" class="form-control-sm">
        </div>

        <div class="col-md-6 mb-3">
            <label for="exampleInputEmail1" class="form-label">Empresa</label>
            <input type="text" name="company${experience_count}" class="form-control-sm">
        </div>

            <div class="mb-3 d-flex justify-content-between">
            <div>
                <label for="exampleInputEmail1" class="form-label">De</label>
                <input type="text" name="from1${experience_count}" class="form-control-sm">
            </div>
            <div>
                <label for="exampleInputEmail1" class="form-label">Até</label>
                <input type="text" name="to1${experience_count}" class="form-control-sm">
            </div>
           
     </div>`;
        var htmlObject = document.createElement('div');
        htmlObject.innerHTML = field;
        addExperience.insertAdjacentElement("beforeend", htmlObject);
    }
    if (experience_count == 6) {
        experienceHide.style = "display:none";
    }
}