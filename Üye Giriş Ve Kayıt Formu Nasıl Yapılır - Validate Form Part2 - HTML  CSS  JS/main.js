const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", ()=>{
    container.classList.add("right-panel-active");
})

loginButton.addEventListener("click", ()=>{
    container.classList.remove("right-panel-active");
})


const form = document.querySelector('form');
const username = document.getElementById('username');
const usernameError = document.querySelector('#username-error');
const email = document.getElementById('email');
const emailError = document.querySelector('#email-error');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password-error');

function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
    small.innerText = ''
}

// Check email is valid
function checkEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

email.addEventListener("input", function(){
    if (!checkEmail(email.value)) {
        emailError.textContent = "*Email is not valid"
    }else {
        emailError.textContent = "";
    }
})


username.addEventListener("input", function(){
    if(username.value.length < 4){
        usernameError.textContent = "*En az 4 Karakterli olsun"
    }else if(username.value.length > 20){
        usernameError.textContent = "*En fazla 20 Karakterli olsun"
    }
    else{
        usernameError.textContent = "";
    }
})

password.addEventListener("input", function(){
    if(password.value.length < 4){
        passwordError.textContent = "*En az 4 Karakterli olsun"
    }else if(password.value.length > 20){
        passwordError.textContent = "*En fazla 20 Karakterli olsun"
    }
    else{
        passwordError.textContent = "";
    }
})

function checkRequired(inputArr){
    let isRequired = false
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `*${getFieldName(input)} is required`)
            isRequired = true
        }else{
            showSuccess(input)
        }
    })
    return isRequired
}

const lgForm = document.querySelector('.form-lg');
const lgEmail = document.querySelector('.email-2');
const lgEmailError = document.querySelector('.email-error-2');
const lgPassword = document.querySelector('.password-2');
const lgPasswordError = document.querySelector('.password-error-2');

function showError2(input, message){
    const formControl2 = input.parentElement
    formControl2.className = 'form-control2 error'
    const small2 = formControl.querySelector('small')
    small2.innerText = message
}

function showSuccess2(input) {
    const formControl2 = input.parentElement
    formControl2.className = 'form-control2 success'
    const small2 = formControl.querySelector('small')
    small2.innerText = ''
}


function checkEmail2(lgEmail) {
    const emailRegex2 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex2.test(lgEmail);
}

lgEmail.addEventListener("input", function(){
    if (!checkEmail2(lgEmail.value)) {
        lgEmailError.textContent = "*Email is not valid"
    }else {
        lgEmailError.textContent = "";
    }
})


lgPassword.addEventListener("input", function(){
    if(lgPassword.value.length < 4){
        lgPasswordError.textContent = "*En az 4 Karakterli olsun"
    }else if(lgPassword.value.length > 20){
        lgPasswordError.textContent = "*En fazla 20 Karakterli olsun"
    }
    else{
        lgPasswordError.textContent = "";
    }
})

function checkRequiredLg(inputArr2){
    let isRequiredLg = false
    inputArr2.forEach(function(input){
        if(input.value.trim() === ''){
            showError2(input, `*${getFieldNameLg(input)} is required`)
            isRequiredLg = true
        }else{
            showSuccess2(input)
        }
    })
    return isRequiredLg
}