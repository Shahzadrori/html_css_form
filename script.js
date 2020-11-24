const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//show input error message
function showError(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formcontrol error';
    const small =formcontrol.querySelector( 'small');
    small.innerText = message;
    
}
//show success message
function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formcontrol success';
}
//valid email
function checkemail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'Email is not valid');
    
    }
}
//check password mathch
function checkpasswordsmatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Do not match');
    }
    
}
// Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//check Required files
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value === ''){
            showError(input,` ${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input,min,max){
    if (input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }
        else if(input.value.length > max) {
            showError(input,`${getFieldName(input)} must be less then ${max} characters`);
        }else{
            showSuccess(input);
        }
        
    
}


//add event listner
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,5,25);
    checkemail(email);
    checkpasswordsmatch(password,password2);

});


