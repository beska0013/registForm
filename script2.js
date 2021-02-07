const emailData=localStorage.getItem('email')
const passData=localStorage.getItem('password')
const passLogin=document.getElementById('loginpass')
const emailLogin=document.getElementById('loginemail')
const logInBtn=document.getElementById('logBtn')

const invalidOne=document.forms.logIn.children[0].children[1]
const invalidTwo=document.forms.logIn.children[1].children[1]
const loginText=document.querySelector('#textAnime')

function checkForm(){
    if(!(emailData===emailLogin.value)){
        invalidOne.innerHTML='Invalid Email'
    }
    if(emailData===emailLogin.value){
        invalidOne.innerHTML=''
    }
    if(!(passData===passLogin.value)){
        invalidTwo.innerHTML='Invalid Password'
    }
    if(passData===passLogin.value){
        invalidTwo.innerHTML=''
    }
    if(emailData===emailLogin.value && passData===passLogin.value){
        document.body.children[0].style.display='none'
        loginText.classList.add('type-anime')
    }
}
console.log()
logInBtn.addEventListener('click',checkForm)
