const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
let success=true;

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
});
function validateInputs(){
    const usernameVal =username.value.trim();
    const emailVal =email.value.trim();
    const passwordVal =password.value.trim();
    const cpasswordVal =cpassword.value.trim();
    if(usernameVal==''){
        success=false;
        setError(username,'Username is required.')
    }
    else{
        setSuccess(username)
    }
    if(emailVal==''){
        success=false;
        setError(email,'email is required.')
    }
    else if(!validateEmail(emailVal)){
        success=false;
        setError(email,'Please enter a valid email.')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal==''){
        success=false;
        setError(password,'Password is required.')
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'password must be atleast 8 characters long.')
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal==''){
        success=false;
        setError(cpassword,'Confirm password is required.')
    }
    else if(cpasswordVal!==passwordVal){
        success=false;
        setError(cpassword,'Password does not match.')
    }
    else{
        setSuccess(cpassword)
    }
    return success; 
}
function setError(element,message){
    const input_sec = element.parentElement;
    const errorElement =input_sec.querySelector('.error_msg');

    errorElement.innerText= message;
    input_sec.classList.add('error');
    input_sec.classList.remove('success');
}
function setSuccess(element){
    const input_sec = element.parentElement;
    const errorElement =input_sec.querySelector('.error_msg');

    errorElement.innerText='';
    input_sec.classList.add('success');
    input_sec.classList.remove('error');
}
var validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
}