let firstName = document.querySelector("#first-name")
let lastName = document.querySelector("#last-name")
let email = document.querySelector(".input-email")
let emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
let password = document.querySelector(".input-password");
let isVisible = false;
let visButton = document.querySelector(".visibility")
const firstNameReg = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
const lastNameReg = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
const passwordReg = new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$/)
const specialReg = new RegExp(/^.*(?=.*[!#$%&?@ "]).*$/)
let validFirstName = null;
let validLastName = null;
let validEmail = null;
let validPassowrd = null;
let eightCharacters = document.querySelector("#spec1")
let oneSpecial = document.querySelector("#spec2")
let upperCase = document.querySelector("#spec3")
let lowerCase = document.querySelector("#spec4")
let numbers = document.querySelector("#spec5")
let buttonIcon = document.getElementsByTagName("i")[0];

let visibility = ()=>{
if (isVisible === false){
    password.removeAttribute("type");
    password.setAttribute("type","text");
    buttonIcon.removeAttribute("class");
    buttonIcon.setAttribute("class", "fas fa-eye-slash");
    isVisible = true;
}else if(isVisible === true){
    password.removeAttribute("type");
    password.setAttribute("type","password");
    buttonIcon.removeAttribute("class")
    buttonIcon.setAttribute("class", "fas fa-eye");
    isVisible = false;
}
}
visButton.addEventListener("click", visibility)

let passwordSpec1= ()=>{
if(password.value.length == 8)
{
    eightCharacters.removeAttribute("class")
    eightCharacters.setAttribute("class", "valid")
}else if (password.value.length < 8)
{
    eightCharacters.removeAttribute("class")
    eightCharacters.setAttribute("class", "inValid") 
}

}

let passwordSpec2 = ()=>{
if(specialReg.test(password.value) == false)
{
    oneSpecial.removeAttribute("class")
    oneSpecial.setAttribute("class", "inValid")
}else if (specialReg.test(password.value) == true){
    eightCharacters.removeAttribute("class")
    eightCharacters.setAttribute("class", "valid") 
}

    
}


password.addEventListener("input", passwordSpec1)
password.addEventListener("input", passwordSpec2)

let formValidation = ()=>{
    if(emailReg.test(email.value) === true)
    {
        validEmail = true;
    }
    else if(emailReg.test(email.value) === false)
    {
        validEmail = false;
    }
if(firstNameReg.test(firstName.value) === true)
{
validFirstName = true;
}
else if (firstNameReg.test(firstName.value) === false)
{
validFirstName = false;
}
if(lastNameReg.test(lastName.value) === true)
{
validLastName = true;
}
else if (lastNameReg.test(lastName.value) === false)
{
validLastName = false;
}
if(passwordReg.test(password.value) === true)
{
validLastPassword = true;
}
else if (passwordReg.test(password.value) === false)
{
validPassowrd = false;
}
}