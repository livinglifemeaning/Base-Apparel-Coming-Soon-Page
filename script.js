const email = document.querySelector('.email'); 
const form = document.querySelector('form'); 

let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 

form.addEventListener('submit', validateEmail); 

function validateEmail(e){
    e.preventDefault(); 
    const userEmail = email.value; 

    if(userEmail.match(validEmail)){
        this.submit();
        form.classList.remove('error') 
    } else{
        form.classList.add('error'); 
    }

}