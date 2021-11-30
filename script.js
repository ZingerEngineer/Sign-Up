let password = document.querySelector(".password");
let email = document.querySelector(".email");
let user = {};
const signInButton = document.querySelector(".sign-in");
let isVisible = false;
let visButton = document.querySelector(".visibility")
let buttonIcon = document.getElementsByTagName("i")[1];
let signIn = ()=>{
    let textPassword = 
    user["email"] = email.value
    user["password"] = password.value
    console.log(user)
}
signInButton.addEventListener("click",signIn);
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