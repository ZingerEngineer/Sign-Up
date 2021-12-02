let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let confirmPassword = document.querySelector(".input-confirm");
let visButton = document.querySelector(".visibility");
let isVisible = false;
let validFirstName = null;
let validLastName = null;
let validEmail = null;
let validPassowrd = null;
let validConfirm = null;
let validSpec1 = null;
let validSpec2 = null;
let validSpec3 = null;
let validSpec4 = null;
let validSpec5 = null;
let eightCharacters = document.querySelector("#spec1");
let oneSpecial = document.querySelector("#spec2");
let upperCase = document.querySelector("#spec3");
let lowerCase = document.querySelector("#spec4");
let numbers = document.querySelector("#spec5");
let buttonIcon = document.getElementsByTagName("i")[0];
const emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const firstNameReg = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
const lastNameReg = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
const passwordReg = new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$/);
const specialReg = new RegExp(/^.*(?=.*[!#$%&?@ "]).*$/);
const upperReg = new RegExp(/^.*(?=.*[A-Z]).*$/);
const lowerReg = new RegExp(/^.*(?=.*[a-z]).*$/);
const numbersReg = new RegExp(/^.*(?=.*\d).*$/);

let visibility = () => {
    if (isVisible === false) {
        password.type = "password"
        buttonIcon.classList.remove("fas", "fa-eye-slash");
        buttonIcon.classList.add("fas", "fa-eye");
        isVisible = true;
    } else if (isVisible === true) {
        password.type = "text"
        buttonIcon.classList.remove("fas", "fa-eye");
        buttonIcon.classList.add("fas", "fa-eye-slash");
        isVisible = false;
    }
}
visButton.addEventListener("click", visibility)

let passwordSpec1 = () => {
    if (password.value.length >= 8) {
        eightCharacters.classList.remove("inValid")
        eightCharacters.classList.add("valid")
        validSpec1 = true;
    } else if (password.value.length < 8) {
        eightCharacters.classList.remove("valid")
        eightCharacters.classList.add("inValid")
        validSpec1 = false;
    }

}

let passwordSpec2 = () => {
    if (specialReg.test(password.value) == false) {
        oneSpecial.classList.remove("valid")
        oneSpecial.classList.add("inValid")
        validSpec2 = false
    } else if (specialReg.test(password.value) == true) {
        oneSpecial.classList.remove("inValid")
        oneSpecial.classList.add("valid")
        validSpec2 = true;
    }
}

let passwordSpec3 = () => {
    if (upperReg.test(password.value) == false) {
        upperCase.classList.remove("valid")
        upperCase.classList.add("inValid")
        validSpec3 = false;
    } else if (upperReg.test(password.value) == true) {
        upperCase.classList.remove("inValid")
        upperCase.classList.add("valid")
        validSpec3 = true
    }
}
let passwordSpec4 = () => {
    if (lowerReg.test(password.value) == false) {
        lowerCase.classList.remove("valid")
        lowerCase.classList.add("inValid")
        validSpec4 = false;
    } else if (lowerReg.test(password.value) == true) {
        lowerCase.classList.remove("inValid")
        lowerCase.classList.add("valid")
        validSpec4 = true;
    }
}

let passwordSpec5 = () => {
    if (numbersReg.test(password.value) == false) {
        numbers.classList.remove("valid")
        numbers.classList.add("inValid")
        validSpec5 = false;
    } else if (numbersReg.test(password.value) == true) {
        numbers.classList.remove("inValid")
        numbers.classList.add("valid")
        validSpec5 = true;
    }
}

let firstNameValidation = () => {
    if (firstNameReg.test(firstName.value) === true) {
        firstName.classList.remove("inputInValid")
        firstName.classList.add("inputValid")
    } else if (firstNameReg.test(firstName.value) === false) {
        firstName.classList.remove("inputValid")
        firstName.classList.add("inputInValid")
    }
}
let lastNameValidation = () => {
    if (lastNameReg.test(lastName.value) === true) {
        lastName.classList.remove("inputInValid")
        lastName.classList.add("inputValid")
    } else if (lastNameReg.test(lastName.value) === false) {
        lastName.classList.remove("inputValid")
        lastName.classList.add("inputInValid")
    }
}

let emailValidation = () => {
    if (emailReg.test(email.value) === true) {
        email.classList.remove("inputInValid")
        email.classList.add("inputValid")
    } else if (emailReg.test(email.value) === false) {
        email.classList.remove("inputValid")
        email.classList.add("inputInValid")
    }
}

let confirmation = () => {
    if (confirmPassword.value == password.value && password.value != "") {
        validConfirm = true;
        confirmPassword.classList.remove("inputInValid")
        confirmPassword.classList.add("inputValid")
    }
    else {
        validConfirm = false;
        confirmPassword.classList.remove("inputValid")
    }
}

password.addEventListener("input", passwordSpec1)
password.addEventListener("input", passwordSpec2)
password.addEventListener("input", passwordSpec3)
password.addEventListener("input", passwordSpec4)
password.addEventListener("input", passwordSpec5)
confirmPassword.addEventListener("input", confirmation)
firstName.addEventListener("input", firstNameValidation)
lastName.addEventListener("input", lastNameValidation)
email.addEventListener("input", emailValidation)
let formValidation = () => {
    if (emailReg.test(email.value) === true) {
        validEmail = true;
    }
    else if (emailReg.test(email.value) === false) {
        validEmail = false;
    }
    if (firstNameReg.test(firstName.value) === true) {
        validFirstName = true;
    }
    else if (firstNameReg.test(firstName.value) === false) {
        validFirstName = false;
    }
    if (lastNameReg.test(lastName.value) === true) {
        validLastName = true;
    }
    else if (lastNameReg.test(lastName.value) === false) {
        validLastName = false;
    }
    if (passwordReg.test(password.value) === true) {
        validLastPassword = true;
    }
    else if (passwordReg.test(password.value) === false) {
        validPassowrd = false;
    }
}