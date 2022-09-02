let email = document.getElementById('email')
let error_email_mesage = document.getElementsByClassName('error_email')
let submit_button = document.getElementById('submit')
const regular_exprecion_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
 function validate_Email()
{

    if (regular_exprecion_email.test(email.value))
    {
        email.classList.toggle('correct')
        error_email_mesage[0].innerText = "correct email";
        error_email_mesage[0].style.color = '#6fe2a9';   
        submit_button.disabled = false;
    }
    else
    {

        email.classList.toggle('error')
        error_email_mesage[0].innerText = "please privade a valid email";
        error_email_mesage[0].style.color = '#e2706f';  
        submit_button.disabled = true;
    }

}