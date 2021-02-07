
//form regist input
const errorOne=document.forms.regist.children[0].children[1]
const errorTwo=document.forms.regist.children[1].children[1]

const inputEmail=document.getElementById('email')
const inputPass=document.getElementById('pass')
const inputRepPass=document.getElementById('repass')
const registBtn=document.getElementById('reBtn')


//email input function

inputEmail.onblur= function (){
   if(!inputEmail.value.includes('@')){
       errorOne.innerHTML='Invalid Input'
       inputEmail.focus()
   }
   else{
       errorOne.innerHTML=''
   }
}

//localStorage function
function saveData(){
    localStorage.setItem('email',inputEmail.value)
    return localStorage
}

function checkPass (){
    if(!(inputPass.value===inputRepPass.value)){
        errorTwo.innerHTML='Invalid Password'
        document.forms.regist.action='javascript:void[0]'

    }
    else{
        errorTwo.innerHTML=''
        document.forms.regist.action='./index2.html'
    }


}

function passRegistration(){
    if(inputPass.value===inputRepPass.value){
        localStorage.setItem('password',inputPass.value)
    }
}


registBtn.addEventListener('click',saveData)
registBtn.addEventListener('click',passRegistration)
registBtn.addEventListener('click',checkPass)

























