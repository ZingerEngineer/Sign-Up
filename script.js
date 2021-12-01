let firstName = document.querySelector("#first-name")
let lastName = document.querySelector("#last-name")

let password = document.querySelector(".input-password");
let isVisible = false;
let visButton = document.querySelector(".visibility")
let firstNameReg = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
let validName = true;
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

let nameValidation = ()=>{
if(firstNameReg.test(firstName.value) === true)
{
validName = true;
}
else if (firstNameReg.test(firstName.value) === false)
{
validName = false;
}
}