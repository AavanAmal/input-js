const form = document.querySelector('#form')
const email = document.querySelector('#email');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const emailVal = email.value.trim();
    let success = true

    if(emailVal===''){
        success = false;
        setError(email,'Email is Required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please Enter a Valid email')
    }
    else{
        setSuccess(email,'Success')

    }

}

function setError(element,message){
    const row = element.parentElement;
    const errorElement = row.querySelector('.error')

    errorElement.innerText = message;
    errorElement.style.color='red';
    row.classList.add('error')
    row.classList.remove('success')
}

function setSuccess(element,message){
    const row = element.parentElement;
    const errorElement = row.querySelector('.error')

    errorElement.innerText =message;
    errorElement.style.color='green';
    row.classList.add('success')
    row.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };