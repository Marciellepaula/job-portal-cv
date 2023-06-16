var curriculumvitae = curriculumvitae || {};

curriculumvitae = (function () {
  "use strict";

  var gaTrackerName = "";

  function init() {
    var gaName = "";

    if (typeof ga === "function") {
      ga(function () {
        gaName = ga.getAll()[0].get("name");
      });
    }

    this.gaTrackerName = gaName;
    curriculumvitae.templateSelector();

    document.getElementById("btnPreview").addEventListener("click", function () {
      curriculumvitae.preview();
    });

    window.addEventListener("resize", function () {
      curriculumvitae.adjustCVSize();
    }, true);

    var storageData = curriculumvitae.storageData();
    var currentStep = window.sessionStorage.getItem("currentStep") || 1;
    curriculumvitae.openTab(parseInt(currgientStep));

    var steps = document.getElementsByClassName("step");
    var avatarImg = document.getElementById("avatar-img");
    var confirmMsg = "Todo o conteúdo será apagado! Deseja continuar?";

    Array.from(steps).forEach(function (step) {
      if (storageData[step.getAttribute("data-id")] !== 1) {
        step.className += " disabled";
      }

      step.addEventListener("click", function () {
        var eventLabel = "Nav" + this.dataset.id.toUpperCase();

        if (typeof ga === "function") {
          ga(curriculumvitae.gaTrackerName + ".send", "event", "CV", "Click", eventLabel);
        }

        if (curriculumvitae.formValidations() === true) {
          Array.from(steps).forEach(function (step) {
            var tab = document.getElementById(step.getAttribute("data-id"));
            tab.className = tab.className.replace(" active", "");
            step.className = step.className.replace(" active", "");
          });

          var currentStep = parseInt(this.getAttribute("data-id").split("step")[1]);
          curriculumvitae.openTab(currentStep);
        }
      });
    });

    document.getElementById("btnResetForm").parentNode.addEventListener("click", function () {
      var eventLabel = "Reset";

      if (window.confirm(confirmMsg)) {
        if (typeof ga === "function") {
          ga(curriculumvitae.gaTrackerName + ".send", "event", "CV", "Click", eventLabel);
        }

        window.sessionStorage.clear();
        curriculumvitae.storageData();
        curriculumvitae.openTab(1);
        avatarImg.src = avatarImg.dataset.default;
        this.closest("form").reset();
      }
    });

    document.getElementById("btnResetFormMobile").parentNode.addEventListener("click", function () {
      if (window.confirm(confirmMsg)) {
        var eventLabel = "Reset";

        if (typeof ga === "function") {
          ga(curriculumvitae.gaTrackerName + ".send", "event", "CV", "Click", eventLabel);
        }

        window.sessionStorage.clear();
        curriculumvitae.storageData();
        curriculumvitae.scrollToTop(220);
        avatarImg.src = avatarImg.dataset.default;
        this.closest("form").reset();
      }
    });

    document.getElementById("btnNext").addEventListener("click", function () {
      var eventLabel = "Next";

      if (typeof ga === "function") {
        ga(curriculumvitae.gaTrackerName + ".send", "event", "CV", "Click", eventLabel);
      }

      if (curriculumvitae.formValidations() === true) {
        var currentStep = parseInt(window.sessionStorage.getItem("currentStep"));
        var nextStep = currentStep + 1;

        if (nextStep <= steps.length) {
          window.sessionStorage.setItem("currentStep", nextStep);
          curriculumvitae.openTab(nextStep);
          curriculumvitae.scrollToTop(220);

          if (typeof ga === "function") {
            ga(curriculumvitae.gaTrackerName + ".send", "event", "CV", "Click", "NavStep" + nextStep);
          }
        }
      }
    });

    document.getElementById("btnPrev").addEventListener("click", function () {
      var eventLabel = "Prev";

      if (typeof ga === "function") {
        ga(curriculumvitae.gaTrackerName + ".send", "event", "CV", "Click", eventLabel);
      }

      var currentStep = parseInt(window.sessionStorage.getItem("currentStep"));
      var prevStep = currentStep - 1;

      if (prevStep >= 1) {
        window.sessionStorage.setItem("currentStep", prevStep);
        curriculumvitae.openTab(prevStep);
        curriculumvitae.scrollToTop(220);

        if (typeof ga === "function") {
          ga(curriculumvitae.gaTrackerName + ".send", "event", "CV", "Click", "NavStep" + prevStep);
        }
      }
    });
  }

  function storageData() {
    var storageData = {};
    var steps = document.getElementsByClassName("step");

    Array.from(steps).forEach(function (step) {
      var stepId = step.getAttribute("data-id");
      var storageValue = window.sessionStorage.getItem(stepId);
      storageData[stepId] = (storageValue === "1");
    });

    return storageData;
  }

  function formValidations() {
    // Perform form validations and return true or false based on the results
    // Add your form validation logic here

    return true; // Placeholder, replace with your actual form validation logic
  }

  function openTab(tabIndex) {
    var tab = document.getElementById("step" + tabIndex);
    var step = document.getElementById("step" + tabIndex + "step");

    if (tab && step) {
      tab.className += " active";
      step.className += " active";
    }
  }

  function scrollToTop(offset) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  function preview() {
    // Perform preview logic
    // Add your preview logic here
  }

  function adjustCVSize() {
    // Perform CV size adjustment logic
    // Add your CV size adjustment logic here
  }

  function templateSelector() {
    // Perform template selection logic
    // Add your template selection logic here
  }

  return {
    init: init,
    storageData: storageData,
    formValidations: formValidations,
    openTab: openTab,
    scrollToTop: scrollToTop,
    preview: preview,
    adjustCVSize: adjustCVSize,
    templateSelector: templateSelector
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  curriculumvitae.init();
});
