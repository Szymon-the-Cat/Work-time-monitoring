const nameEl = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const checkboxEl = document.getElementById("permission");
const submitBtn = document.getElementById("form-submit");

const nameValue = nameEl.value;
const emailValue = email.value;
const subjectValue = subject.value;
const messageValue = message.value;
const checkboxValue = checkboxEl;

const success = function () {
  swal({
    title: "Wiadomość wysłana pomyślnie!",
    text: "Dziękujemy za skontaktowanie się z nami, potrzebujemy kilku godzin aby odpowiedzieć na Państwa pytania. W pilnych sprawach prosimy o kontakt drogą telefoniczną.",
    icon: "success",
    button: "OK",
  });
};

const inputEmpty = function () {
  swal({
    title: "O czymś zapomniałeś",
    text: "Uzupełnij wszystkie pola formularza",
    icon: "error",
    button: "OK",
  });
};

function sendMail(name, email, subject, message) {
  emailjs.send("service_kjoll2s", "template_igsx5mn", {
    name: name,
    mail: email,
    title: subject,
    message: message,
  });
}

classList.add("input-item--empty");
classList.remove("input-item--empty");

function checkInputs() {
  if (nameValue === "") {
    nameEl.classList.add("input-item--empty");
  } else {
    classList.remove("input-item--empty");
  }

  if (emailValue === "") {
    email.classList.add("input-item--empty");
  } else {
    email.classList.remove("input-item--empty");
  }
  if (subjectValue === "") {
    setErrorFor(subject);
  } else {
    setSuccessFor(subject);
  }
  if (messageValue === "") {
    setErrorFor(message);
  } else {
    setSuccessFor(message);
  }
  if (checkboxEl.checked === false) {
    errorCheckbox(checkboxEl);
  } else {
    successCheckbox(checkboxEl);
  }
}

nameEl.addEventListener("input", setSuccessFor);
email.addEventListener("input", setSuccessFor);
subject.addEventListener("input", setSuccessFor);
message.addEventListener("input", setSuccessFor);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nameEl.value == "" ||
    email.value == "" ||
    subject.value == "" ||
    message.value == "" ||
    checkboxEl.checked == false
  ) {
    inputEmpty();
    checkInputs();
  } else {
    success();
    sendMail(nameEl.value, email.value, subject.value, message.value);
    nameEl.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    checkboxEl.checked = false;
  }
});
