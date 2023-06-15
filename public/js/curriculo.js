var curriculumvitae = curriculumvitae || {},
  curriculumvitae = (function () {
    "use strict";
    var m = 0;
    return {
      gaTrackerName: "",
      init: function () {
        var e = "";
        "function" == typeof ga &&
          ga(function () {
            e = ga.getAll()[0].ge                 t("name");
          }),
          (this.gaTrackerName = e),
          curriculumvitae.templateSelector(),
          document
            .getElementById("btnPreview")
            .addEventListener("click", function () {
              curriculumvitae.preview();
            }),
          window.addEventListener(
            "resize",
            function () {
              curriculumvitae.adjustCVSize();
            },
            !0
          );
        var t = curriculumvitae.storageData(),
          r = window.sessionStorage.getItem("currentStep")
            ? window.sessionStorage.getItem("currentStep")
            : 1;
        curriculumvitae.openTab(parseInt(r));
        var a = document.getElementsByClassName("step"),
          n = document.getElementById("avatar-img"),
          i = "Todo o conteÃºdo serÃ¡ apagado! Deseja continuar?";
        Sg_Utils.forEach(a, function (e) {
          1 !== t[e.getAttribute("data-id")] && (e.className += " disabled"),
            Sg_Utils.addListener(e, "click", function () {
              var e;
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "Nav" + this.dataset.id.toUpperCase()
                ),
                !0 === curriculumvitae.formValidations() &&
                  ((e = document.getElementsByClassName("step")),
                  Sg_Utils.forEach(e, function (e) {
                    var t = document.getElementById(e.getAttribute("data-id"));
                    (t.className = t.className.replace(" active", "")),
                      (e.className = e.className.replace(" active", ""));
                  }),
                  (r = parseInt(this.getAttribute("data-id").split("step")[1])),
                  curriculumvitae.openTab(r));
            });
        }),
          Sg_Utils.addListener(
            document.getElementById("btnResetForm").parentNode,
            "click",
            function () {
              var e;
              window.confirm(i) &&
                ("function" == typeof ga &&
                  ga(
                    curriculumvitae.gaTrackerName + ".send",
                    "event",
                    "CV",
                    "Click",
                    "Reset"
                  ),
                window.sessionStorage.clear(),
                curriculumvitae.storageData(),
                curriculumvitae.openTab(1),
                (e = n.dataset.default),
                (n.src = e),
                this.closest("form").reset());
            }
          ),
          Sg_Utils.addListener(
            document.getElementById("btnResetFormMobile").parentNode,
            "click",
            function () {
              window.confirm(i) &&
                ("function" == typeof ga &&
                  ga(
                    curriculumvitae.gaTrackerName + ".send",
                    "event",
                    "CV",
                    "Click",
                    "Reset"
                  ),
                window.sessionStorage.clear(),
                curriculumvitae.storageData(),
                curriculumvitae.scrollToTop(220),
                (n.src = n.dataset.default),
                this.closest("form").reset());
            }
          ),
          Sg_Utils.addListener(
            document.getElementById("btnNext"),
            "click",
            function () {
              var e;
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "Next"
                ),
                curriculumvitae.scrollToElementId("form-curriculum"),
                !0 === curriculumvitae.formValidations() &&
                  (4 <
                    (e =
                      parseInt(document.getElementById("currentStep").value) +
                      1) ||
                    (curriculumvitae.moveBarProgression(e),
                    curriculumvitae.openTab(e)));
            }
          ),
          Sg_Utils.addListener(
            document.getElementById("btnPrevious"),
            "click",
            function () {
              var e;
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "Previous"
                ),
                curriculumvitae.scrollToElementId("form-curriculum"),
                !0 === curriculumvitae.formValidations() &&
                  ((e =
                    parseInt(document.getElementById("currentStep").value) -
                    1) < 1 ||
                    (curriculumvitae.moveBarProgression(e),
                    curriculumvitae.openTab(e)));
            }
          ),
          Sg_Utils.addListener(
            document.getElementById("add_course"),
            "click",
            function (e) {
              l(document.getElementById("academic-block"));
            }
          ),
          Sg_Utils.addListener(
            document.getElementById("add_experience"),
            "click",
            function (e) {
              l(document.getElementById("experience-block"));
            }
          ),
          Sg_Utils.addListener(
            document.querySelector("#avatar"),
            "click",
            function () {
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "PicThumb"
                );
            }
          ),
          Sg_Utils.addListener(
            document.querySelector("[for=avatar]"),
            "click",
            function (e) {
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "PicButton"
                );
            }
          ),
          Sg_Utils.addListener(
            document.querySelector(".hidden-mobile .form-btn--close"),
            "click",
            function () {
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "CloseBottom"
                );
            }
          ),
          Sg_Utils.addListener(
            document.querySelector(".preview-cv--btns .form-btn--close"),
            "click",
            function () {
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "CloseTop"
                );
            }
          ),
          Sg_Utils.addListener(
            document.querySelector(".hidden-mobile .form-btn--pdf"),
            "click",
            function () {
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "DownloadBottom"
                );
            }
          ),
          Sg_Utils.addListener(
            document.querySelector(".preview-cv--btns .form-btn--pdf"),
            "click",
            function () {
              "function" == typeof ga &&
                ga(
                  curriculumvitae.gaTrackerName + ".send",
                  "event",
                  "CV",
                  "Click",
                  "DownloadTop"
                );
            }
          );
        a = document.getElementsByClassName("form-btn--delete");
        Sg_Utils.forEach(a, function (e) {
          Sg_Utils.addListener(e, "click", function () {
            var e;
            1 <
            this.parentElement.parentElement.parentElement.getElementsByClassName(
              "form-btn--delete"
            ).length
              ? this.parentElement.parentElement.remove()
              : ((e =
                  this.parentElement.parentElement.querySelectorAll(
                    "input,textarea"
                  )),
                Sg_Utils.forEach(e, function (e) {
                  e.value = "";
                }));
          });
        });
        a = document.getElementsByClassName("btn-export");
        Sg_Utils.forEach(a, function (e) {
          Sg_Utils.addListener(e, "click", function (e) {
            e.preventDefault(),
              (document.getElementById("type").value = this.dataset.type);
            e = this.closest("form");
            e.setAttribute("target", "_blank"), e.submit();
          });
        }),
          Sg_Utils.addListener(
            document.getElementById("form-curriculum"),
            "submit",
            function (e) {
              return !1 === curriculumvitae.formValidations()
                ? (e.preventDefault(), !1)
                : ((document.getElementById("type").value = ""),
                  this.setAttribute("target", "formtarget"),
                  void window.open("", this.target, "width=600,height=700"));
            }
          );
        var l = function (e) {
          curriculumvitae.clearErrors();
          var r,
            t,
            a,
            n,
            i =
              e.getElementsByClassName("form-row-list")[
                e.getElementsByClassName("form-row-list").length - 1
              ],
            l = e
              .getElementsByClassName("form-row-list")
              [
                e.getElementsByClassName("form-row-list").length - 1
              ].getElementsByTagName("input")[0];
          "" !== l.value
            ? ((l.parentElement.className = "input-group full-w mt-15"),
              (t = i.cloneNode(!0)),
              Sg_Utils.addListener(
                t.getElementsByClassName("form-btn--delete")[0],
                "click",
                function (e) {
                  var t;
                  1 <
                  this.parentElement.parentElement.parentElement.getElementsByClassName(
                    "form-btn--delete"
                  ).length
                    ? this.parentElement.parentElement.remove()
                    : ((t =
                        this.parentElement.parentElement.querySelectorAll(
                          "input,textarea"
                        )),
                      Sg_Utils.forEach(t, function (e) {
                        e.value = "";
                      }));
                }
              ),
              (i = t.querySelectorAll("input,textarea")),
              (a = 0),
              Sg_Utils.forEach(i, function (e) {
                var t = e.name.match(/[^[\]]+/g);
                void 0 !== t[1] &&
                  ((a = parseInt(t[1]) + 1),
                  (e.name = t[0] + "[" + a + "]"),
                  (e.id = t[0] + "[" + a + "]"),
                  void 0 === r && (r = e.name)),
                  (e.value = "");
              }),
              t.setAttribute("data-item", a),
              (i = t.querySelectorAll("label")),
              Sg_Utils.forEach(i, function (e) {
                var t,
                  r = e.htmlFor.match(/[^[\]]+/g);
                void 0 !== r[1] &&
                  ((t = parseInt(r[1]) + 1),
                  e.setAttribute("for", r[0] + "[" + t + "]"));
              }),
              e.insertBefore(
                t,
                e.getElementsByClassName("line")[0].previousSibling
              ),
              void 0 !== r &&
                ((n = document.getElementsByName(r).length),
                document.getElementsByName(r)[n - 1].focus()))
            : ((n = l.parentElement.getElementsByClassName("cv-error")[0]),
              curriculumvitae.showError(
                l,
                n,
                "NÃ£o pode adicionar um novo bloco sem preencher o anterior."
              ),
              l.focus());
        };
      },
      preview: function () {
        var a, n, e, r, i, l, c, o, u, t;
        "function" == typeof ga &&
          ga(
            curriculumvitae.gaTrackerName + ".send",
            "event",
            "CV",
            "Click",
            "Preview"
          ),
          -1 ===
            document
              .getElementById("btnPreview")
              .className.indexOf("disabled") &&
            !0 === curriculumvitae.formValidations() &&
            (window.matchMedia("(min-width: 641px)").matches &&
              curriculumvitae.scrollToElementId("form-curriculum"),
            (e =
              document.getElementById("preview-curriculum")).classList.contains(
              "preview-toggle"
            ) || e.classList.add("preview-toggle"),
            curriculumvitae.utils.validateImage(),
            (a = document.querySelector(".template.active")),
            (n = []),
            document.querySelectorAll("#step1 input").forEach(function (e) {
              var t, r;
              0 <= ["address", "city", "state"].indexOf(e.id)
                ? n.push(e.value)
                : ((t = a.querySelector('[data-cv-preview-id="' + e.id + '"]')),
                  (r = a.querySelector(".user-info--" + e.id)),
                  t &&
                    ("" === e.value
                      ? (r.style.display = "none")
                      : ((t.innerHTML = e.value), r.removeAttribute("style"))));
            }),
            (n = n.filter(function (e) {
              return "" !== e;
            })),
            ((e = a.querySelector('[data-cv-preview-id="address"]')).innerHTML =
              n.join(", ")),
            "" === e.innerHTML.trim() &&
              (a.querySelector(".user-info--address").style = "display: none"),
            document.querySelectorAll("#step1 select").forEach(function (e) {
              var t = a.querySelector('[data-cv-preview-id="' + e.id + '"]'),
                r = a.querySelector(".user-info--" + e.id);
              t &&
                ("" === e.options[e.selectedIndex].value
                  ? (r.style.display = "none")
                  : ((t.innerHTML = e.options[e.selectedIndex].value),
                    r.removeAttribute("style")));
            }),
            "" === document.getElementById("career-goal").value.trim() &&
              (a.querySelector(
                '[data-cv-step="step1_2_preview"]'
              ).style.display = "none"),
            "" !== document.getElementById("career-goal").value.trim() &&
              (((t = a.querySelector(
                '[data-cv-preview-id="career-goal"]'
              )).innerHTML = document
                .getElementById("career-goal")
                .value.replace(/\n/g, "<br />")),
              t.parentElement.removeAttribute("style")),
            ((r = a.querySelector(
              '[data-cv-preview-id="academic"]'
            )).style.display = "none"),
            (i = a.querySelector(".academic-block-preview")),
            ((l = i.parentElement).innerHTML = ""),
            l.append(i),
            document
              .querySelectorAll("#academic-block .form-row-list")
              .forEach(function (e) {
                var a = i.cloneNode(!0),
                  t = e.getAttribute("data-item");
                "" !== document.getElementById("course[" + t + "]").value &&
                  (r.removeAttribute("style"),
                  (a.className = a.className.replace(" hide", "")),
                  e.querySelectorAll("input").forEach(function (e) {
                    var t = e.id.replace(/\[\d+\]$/, ""),
                      r = a.getElementsByClassName("preview-" + t);
                    void 0 !== r[0] &&
                      ("" === e.value
                        ? (a.querySelector(
                            ".academic-" + t
                          ).parentNode.style.display = "none")
                        : (r[0].innerHTML = e.value));
                  }),
                  l.append(a));
              }),
            (t = a.querySelector('[data-cv-preview-id="other_courses"]')),
            "" == document.getElementById("other_courses").value
              ? (t.parentElement.style.display = "none")
              : ((t.innerHTML = document
                  .getElementById("other_courses")
                  .value.replace(/\n/g, "<br />")),
                t.parentElement.removeAttribute("style"),
                r.removeAttribute("style")),
            ((c = a.querySelector(
              '[data-cv-preview-id="experience"]'
            )).style.display = "none"),
            (o = a.querySelector(".experience-block-preview")),
            ((u = o.parentElement).innerHTML = ""),
            u.append(o),
            document
              .querySelectorAll("#experience-block .form-row-list")
              .forEach(function (e) {
                var a,
                  t,
                  n = o.cloneNode(!0),
                  r = e.getAttribute("data-item");
                "" != document.getElementById("company[" + r + "]").value &&
                  (c.removeAttribute("style"),
                  (n.className = n.className.replace(" hide", "")),
                  (a = []),
                  e.querySelectorAll("input,textarea").forEach(function (e) {
                    var t,
                      r = e.id.replace(/\[\d+\]$/, "");
                    0 <= ["company_begin", "company_end"].indexOf(r)
                      ? (a[e.id.replace(/\[\d+\]$/, "")] = e.value)
                      : 0 <=
                        ["work_present"].indexOf(e.id.replace(/\[\d+\]$/, ""))
                      ? (a[e.id.replace(/\[\d+\]$/, "")] = 1 == e.checked)
                      : void 0 !==
                          (t = n.getElementsByClassName(
                            "preview-" + e.id.replace(/\[\d+\]$/, "")
                          ))[0] &&
                        ("" === e.value && n.querySelector(".experience-" + r)
                          ? (n.querySelector(
                              ".preview-" + r
                            ).parentNode.style.display = "none")
                          : (t[0].innerHTML = e.value));
                  }),
                  0 < Object.keys(a).length &&
                    (void 0 !== a.company_begin && "" != a.company_begin
                      ? ((t = a.company_begin),
                        void 0 !== a.work_present && 1 == a.work_present
                          ? (t += " - Presente")
                          : void 0 !== a.company_end &&
                            "" != a.company_end &&
                            a.company_end > a.company_begin &&
                            (t = t + " - " + a.company_end),
                        (n.getElementsByClassName(
                          "preview-period"
                        )[0].innerHTML = t))
                      : n.querySelector(".preview-period") &&
                        (n.querySelector(
                          ".preview-period"
                        ).parentElement.style.display = "none")),
                  (t = n
                    .getElementsByClassName("preview-company_functions")[0]
                    .innerHTML.replace(/\n/g, "<br />")),
                  (n.getElementsByClassName(
                    "preview-company_functions"
                  )[0].innerHTML = t),
                  u.append(n));
              }),
            (t = a.querySelector('[data-cv-preview-id="other_activity"]')),
            "" == document.getElementById("other_activity").value.trim()
              ? (t.parentElement.style.display = "none")
              : ((t.innerHTML = document
                  .getElementById("other_activity")
                  .value.replace(/\n/g, "<br />")),
                t.parentElement.removeAttribute("style"),
                c.removeAttribute("style")),
            (t = a.querySelector('[data-cv-preview-id="other_informations"]')),
            "" == document.getElementById("other_informations").value.trim()
              ? (t.parentElement.style.display = "none")
              : ((t.innerHTML = document
                  .getElementById("other_informations")
                  .value.replace(/\n/g, "<br />")),
                t.parentElement.removeAttribute("style"))),
          curriculumvitae.adjustCVSize();
      },
      generatePdf: function () {
        var a = document.querySelector(".template.active"),
          e = new FormData();
        e.append("cv", a.outerHTML);
        var t = new XMLHttpRequest();
        t.open("POST", "/curriculo_generator.php", !0),
          (t.responseType = "arraybuffer"),
          (t.onload = function (e) {
            var t, r;
            200 == this.status &&
              ((t = new Blob([this.response], { type: "application/pdf" })),
              ((r = document.createElement("a")).href =
                window.URL.createObjectURL(t)),
              (r.download =
                a.querySelector('[data-cv-preview-id="name"]').textContent +
                " - CurrÃ­culo.pdf"),
              r.click());
          }),
          t.send(e);
      },
      openTab: function (t) {
        (document.getElementById("currentStep").value = t),
          this.moveBarProgression(t);
        for (
          var r = document.getElementsByClassName("step"), e = 0;
          e < r.length;
          e++
        ) {
          var a = r[e],
            n = document.getElementById(a.getAttribute("data-id"));
          a.getAttribute("data-id") !== "step" + t
            ? ((n.className = n.className.replace(" active", "")),
              (a.className = a.className.replace(" active", "")))
            : ((a.className = a.className.replace(" disabled", "")),
              (a.className = a.className += " active"));
        }
        (document.getElementById("step" + t).className += " active"),
          (document.getElementById("currentStep").value = t),
          (document.getElementById("btnNext").className = document
            .getElementById("btnNext")
            .className.replace(" hide", "")),
          (document.getElementById("btnPrevious").className = document
            .getElementById("btnPrevious")
            .className.replace(" hide", "")),
          document
            .querySelector("#btnResetForm")
            .parentNode.removeAttribute("style"),
          1 == t
            ? (document.getElementById("btnPrevious").className += " hide")
            : t >= r.length &&
              ((document.getElementById("btnNext").className += " hide"),
              (document.querySelector(
                "#btnResetForm"
              ).parentNode.style.display = "block"));
        var i = document.getElementsByClassName("btn-export");
        Sg_Utils.forEach(i, function (e) {
          t === r.length ? (e.style.display = "") : (e.style.display = "none");
        });
        i = JSON.parse(window.sessionStorage.getItem("visitedTabs"));
        (i["step" + t] = 1),
          window.sessionStorage.setItem("visitedTabs", JSON.stringify(i)),
          window.sessionStorage.setItem("currentStep", t);
      },
      formValidations: function () {
        var t;
        clearTimeout(m), curriculumvitae.clearErrors();
        var e = new Date(),
          r = document.getElementById("name");
        if (
          ((document.getElementById("name").value = document
            .getElementById("name")
            .value.trim()),
          !r.checkValidity())
        )
          return (
            (t = r.nextElementSibling),
            curriculumvitae.showError(
              r,
              t,
              "O nome Ã© de preenchimento obrigatÃ³rio."
            ),
            !1
          );
        r = document.getElementById("email");
        if (!r.checkValidity())
          return (
            (t = r.nextElementSibling),
            "" === r.value
              ? curriculumvitae.showError(
                  r,
                  t,
                  "O email Ã© de preenchimento obrigatÃ³rio."
                )
              : curriculumvitae.showError(
                  r,
                  t,
                  "O email indicado nÃ£o Ã© vÃ¡lido."
                ),
            !1
          );
        for (
          var a = document.getElementsByClassName("line_courses"), n = 0;
          n < a.length;
          n++
        ) {
          var i = a[n].getAttribute("data-item"),
            l = document.getElementsByName("course[" + i + "]")[0];
          if (void 0 !== l)
            if (
              "" !==
                document.getElementsByName(
                  "school_conclusion_year[" + i + "]"
                )[0].value &&
              !l.value
            )
              return (
                curriculumvitae.showError(
                  l,
                  l.nextElementSibling,
                  "Colocou o ano de conclusÃ£o do curso, mas nÃ£o indicou o curso."
                ),
                !1
              );
        }
        var c = document.getElementsByClassName("line_experience").length;
        for (n = 0; n < c; n++) {
          var o = document.getElementsByName("company[" + n + "]")[0];
          if (null != o && "" !== o.value) {
            var u = document.getElementsByName("company_begin[" + n + "]")[0],
              o = document.getElementsByName("company_end[" + n + "]")[0];
            if ("" !== u.value && "" !== o.value && u.value > o.value)
              return (
                (t = u.parentElement.parentElement.nextElementSibling),
                curriculumvitae.showError(
                  o,
                  t,
                  "A data de fim nÃ£o pode ser inferior Ã  data de inÃ­cio."
                ),
                !1
              );
            if ("" !== u.value && new Date(u.value) > e)
              return (
                (t = u.parentElement.parentElement.nextElementSibling),
                curriculumvitae.showError(
                  u,
                  t,
                  "A data de inÃ­cio nÃ£o pode ser superior Ã  data atual."
                ),
                !1
              );
            if ("" !== o.value && new Date(o.value) > e)
              return (
                (t = o.parentElement.parentElement.nextElementSibling),
                curriculumvitae.showError(
                  o,
                  t,
                  "A data de fim nÃ£o pode ser superior Ã  data atual."
                ),
                !1
              );
          }
        }
        var s = !1,
          r = document
            .getElementById("form-curriculum")
            .querySelectorAll(
              'INPUT:not([type="button"]):not([type="hidden"]),SELECT,TEXTAREA'
            );
        return (
          Sg_Utils.forEach(r, function (e) {
            s ||
              !e.willValidate ||
              e.checkValidity() ||
              ((t = e.nextElementSibling),
              (s = curriculumvitae.showError(e, t, "Formato invÃ¡lido.")));
          }),
          !s
        );
      },
      showError: function (e, t, r) {
        return (
          !(!t || void 0 === t || -1 === t.className.indexOf("cv-error")) &&
          ((t.innerHTML = r),
          (t.className = "cv-error active"),
          e.scrollIntoView({ block: "center", behavior: "smooth" }),
          (m = setTimeout(function () {
            (t.className = "cv-error"), (t.innerHTML = "");
          }, 4e3)),
          !0)
        );
      },
      clearErrors: function () {
        var e = document.getElementsByClassName("cv-error active");
        Sg_Utils.forEach(e, function (e) {
          (e.className = "cv-error"), (e.innerHTML = "");
        });
      },
      moveBarProgression: function (e) {
        curriculumvitae.clearErrors();
        e = 25 * (e = void 0 !== e ? e : 1);
        document.getElementById("bar").style.width =
          (e = 100 < e ? 100 : e) + "%";
      },
      storageData: function () {
        var e = JSON.parse(window.sessionStorage.getItem("visitedTabs"));
        null == e &&
          ((e = { step1: 1, step2: 0, step3: 0, step4: 0 }),
          window.sessionStorage.setItem("visitedTabs", JSON.stringify(e)));
        var t = document
          .getElementById("form-curriculum")
          .querySelectorAll(
            "INPUT:not([type='button']):not([type='hidden']),SELECT,TEXTAREA"
          );
        return (
          (window.onbeforeunload = function () {
            Sg_Utils.forEach(t, function (e) {
              e.id &&
                window.sessionStorage.setItem(
                  e.id,
                  document.getElementById(e.id).value
                );
            });
          }),
          Sg_Utils.forEach(t, function (e) {
            var t;
            !e.id ||
              "file" == document.getElementById(e.id).type ||
              (null !== (t = window.sessionStorage.getItem(e.id)) &&
                (document.getElementById(e.id).value = t));
          }),
          e
        );
      },
      profilePic: function (e) {
        var t, r;
        e.files &&
          e.files[0] &&
          ((t = new FileReader()),
          (r = document.getElementById("avatar-img")),
          (t.onload = function (e) {
            r.setAttribute("src", e.target.result);
          }),
          t.readAsDataURL(e.files[0]));
      },
      adjustCVSize: function () {
        var e = document.querySelector(".template.active"),
          t = e.offsetWidth / 794,
          r = (e = document.querySelector(".template.active")).querySelector(
            "[data-cv-print-area]"
          );
        (r.style.webkitTransform = "scale(" + t + ")"),
          (e.style.minHeight = 1023 * t + "px"),
          (document.getElementById("preview-curriculum").style.minHeight =
            1023 * t + 110 + "px");
        var a = parseFloat(e.style.height.slice(0, -2)),
          n = r.offsetHeight;
        parseFloat(a < n) && (e.style.height = n + "px"),
          window.matchMedia("(max-width: 769px)").matches &&
            (r.style.height = n * t + 55 + "px");
      },
      scrollToTop: function (e) {
        var t,
          r = window.scrollY,
          a = Math.PI / (e / 15),
          n = r / 2,
          i = 0,
          l = setInterval(function () {
            0 != window.scrollY
              ? ((i += 1),
                (t = n - n * Math.cos(i * a)),
                window.scrollTo(0, r - t))
              : clearInterval(l);
          }, 15);
      },
      scrollToElementId: function (e) {
        e = document.getElementById(e);
        (e.style = "scroll-margin: 75px;"),
          e.scrollIntoView({ block: "start", behavior: "smooth" }),
          e.removeAttribute("style");
      },
      disableEndDateInput: function (e) {
        var t = e.id.match(/\[\d+\]$/),
          t = document.getElementById("company_end" + t[0]);
        e.checked
          ? (t.setAttribute("disabled", "true"), (t.value = ""))
          : t.removeAttribute("disabled");
      },
      templateSelector: function () {
        var e, t;
        (e = document.getElementById("formBtnSelect")),
          (t = document.getElementById("previewCvList")),
          e.addEventListener("click", function () {
            e.classList.toggle("active"), t.classList.toggle("hidden");
          }),
          (function () {
            var t = document.querySelectorAll(".template"),
              r = document
                .getElementById("previewCvList")
                .querySelectorAll("li[data-template-id]");
            for (let e = 0; e < r.length; e++)
              r[e].addEventListener("click", function () {
                curriculumvitae.utils.cleanClasses(r, "active"),
                  document
                    .querySelector(
                      'li[data-template-id="' + r[e].dataset.templateId + '"]'
                    )
                    .classList.add("active"),
                  curriculumvitae.utils.cleanClasses(t, "active"),
                  document
                    .querySelector(
                      '.template[data-template-id="' +
                        r[e].dataset.templateId +
                        '"]'
                    )
                    .classList.add("active"),
                  curriculumvitae.preview();
              });
            var a = document.querySelectorAll(".cv-thumb-color");
            if (0 < a.length)
              for (var e = 0; e < a.length; e++)
                a[e].addEventListener("click", function (e) {
                  curriculumvitae.utils.cleanClasses(a, "active"),
                    e.target.classList.add("active");
                  for (
                    var t =
                        e.target.parentElement.parentElement.querySelectorAll(
                          ".cv-thumb"
                        ),
                      r = 0;
                    r < t.length;
                    r++
                  )
                    t[r].style.display = "none";
                  (e.target.parentElement.parentElement.querySelector(
                    '.cv-thumb[data-template-color="' +
                      e.target.dataset.templateColor +
                      '"]'
                  ).style.display = "block"),
                    (document.querySelector(
                      '.template[data-template-id="' +
                        e.target.dataset.templateId +
                        '"]'
                    ).dataset.templateColor = e.target.dataset.templateColor);
                });
          })();
      },
      utils: {
        validateImage: function () {
          for (
            var e = document.getElementById("avatar-img"),
              t = document.querySelectorAll(".user-img"),
              r = 0;
            r < t.length;
            r++
          ) {
            var a = t[r];
            e.src.includes("data:image")
              ? (a.classList.remove("hide"),
                (a.querySelector(".preview-avatar-img").src = e.src))
              : a.classList.add("hide");
          }
        },
        cleanClasses: function (e, t) {
          for (var r = 0; r < e.length; r++) e[r].classList.remove(t);
        },
      },
    };
  })();
