let form=document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");

// let error=document.querySelectorAll(".error")


form.addEventListener("submit",function(event){
    event.preventDefault();
    let emailError = document.querySelector("#emailError");
    emailError.textContent=""
    let passwordError=document.querySelector("#passwordError");
    passwordError.textContent=""

    let resultMsg = document.querySelector("#resultMessage");
    resultMsg.textContent=""

     
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    let emailAns=emailRegex.test(email.value.trim());
    let passwordAns=passwordRegex.test(password.value.trim());
    // console.log(emailRegexAns);
    let isValid= true ;

    if(!emailAns){
       emailError.textContent="email is incorrect";
       emailError.style.display="initial";
       emailError.style.color="red";
        isValid=false; 
    }
    else{
        emailError.textContent=""
    }


    // else{
    //     emailError.textContent="Your email is correct"           ///ye agar email sahi h ek messsage aayga correct k liye jo ki hame abhi kam  nhi h iska
    //     emailError.style.display="initial"
    //     emailError.style.color="green"
    // }


    if(!passwordAns){
        passwordError.textContent="password is Incorrect";
        passwordError.style.display="initial";
        passwordError.style.color="red";
        isValid=false;
    } else{
        passwordError.textContent=""
    }

    //  else{
    //     passwordError.textContent="Your password is correct"           ///ye agar password sahi h ek messsage aayga correct k liye jo ki hame abhi kam  nhi h iska
    //     passwordError.style.display="initial"
    //     passwordError.style.color="green"   
    // }
    if(isValid){
        resultMsg.textContent="Everything is correct"
        // resultMsg.style.display="initial"
    }

})