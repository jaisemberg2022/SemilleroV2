  //validacion del primer nombre
  let  first_name = document.getElementById('first_name')
  let  first_name_error_mesage = document.getElementsByClassName('first_name_error_mesage')
   function validate_first_Name()
  {
      const regular_exprecion_first_name = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
          if (regular_exprecion_first_name.test(first_name.value) || (regular_exprecion_first_name.test(first_name.value)))
          {
              first_name_error_mesage[0].innerText = "correct name";
              first_name_error_mesage[0].style.color = 'lime';
              document.getElementById('first_name').style.borderColor="lime"; 
              document.getElementById('first_name').style.backgroundImage = "url('../images/icon-checked.svg')";    
              document.getElementById('first_name').style.backgroundRepeat = "no-repeat";
              document.getElementById('first_name').style.backgroundPosition = "95%" 
          }
          else
          {
              first_name_error_mesage[0].innerText = "incorrect name";
              first_name_error_mesage[0].style.color = 'red';  
              document.getElementById('first_name').style.borderColor="red";
              document.getElementById('first_name').style.backgroundImage = "url('../images/icon-error.svg')";    
              document.getElementById('first_name').style.backgroundRepeat = "no-repeat";
              document.getElementById('first_name').style.backgroundPosition = "95%" 
          }
  }
  
  //validacion del segundo nombre
  let  last_name = document.getElementById('last-name')
  let  last_name_error_mesage = document.getElementsByClassName('last_name_error_mesage')
   function validate_Last_Name()
  {
      const regular_exprecion_last_name = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
          if (regular_exprecion_last_name.test(last_name.value) || (regular_exprecion_last_name.test(last_name.value)))
          {
              last_name_error_mesage[0].innerText = "correct name";
              last_name_error_mesage[0].style.color = 'lime';
              document.getElementById('last-name').style.borderColor="lime" ; 
              document.getElementById('last-name').style.backgroundImage = "url('../images/icon-checked.svg')";    
              document.getElementById('last-name').style.backgroundRepeat = "no-repeat";
              document.getElementById('last-name').style.backgroundPosition = "95%" 
          }
          else
          {
              last_name_error_mesage[0].innerText = "incorrect name";
              last_name_error_mesage[0].style.color = 'red';  
              document.getElementById('last-name').style.borderColor="red";
              document.getElementById('last-name').style.backgroundImage = "url('../images/icon-error.svg')";    
              document.getElementById('last-name').style.backgroundRepeat = "no-repeat";
              document.getElementById('last-name').style.backgroundPosition = "95%"
          }
  }
  //validacion del correo electronico
  let email = document.getElementById('email')
  let error_email_mesage = document.getElementsByClassName('error_email')
   function validate_Email()
  {
      const regular_exprecion_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
          if (regular_exprecion_email.test(email.value) || (regular_exprecion_email.test(email.value)))
          {
              error_email_mesage[0].innerText = "correct email";
              error_email_mesage[0].style.color = 'lime';
              document.getElementById('email').style.borderColor="lime" 
              document.getElementById('email').style.backgroundImage = "url('../images/icon-checked.svg')";    
              document.getElementById('email').style.backgroundRepeat = "no-repeat";
              document.getElementById('email').style.backgroundPosition = "95%";
          }
          else
          {
              error_email_mesage[0].innerText = "please privade a valid email";
              error_email_mesage[0].style.color = 'red';  
              document.getElementById('email').style.borderColor="red";
              document.getElementById('email').style.backgroundImage = "url('../images/icon-error.svg')";    
              document.getElementById('email').style.backgroundRepeat = "no-repeat";
              document.getElementById('email').style.backgroundPosition = "95%";
                          
          }
  }
  
  //validacion contraseña 
  let password = document.getElementById('password')
  let error_mesage_password = document.getElementsByClassName('error_mesage_password')
   function validate_Password()
  {
      const regular_exprecion_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
          if (regular_exprecion_password.test(password.value) || (regular_exprecion_password.test(password.value)))
          {
              error_mesage_password[0].innerText = "valid password";
              error_mesage_password[0].style.color = 'lime';
              document.getElementById('password').style.borderColor="lime" 
              document.getElementById('password').style.backgroundImage = "url('../images/icon-checked.svg')";    
              document.getElementById('password').style.backgroundRepeat = "no-repeat";
              document.getElementById('password').style.backgroundPosition = "95%";
          }
          else
          {
              error_mesage_password[0].innerText = "writhe another password";
              error_mesage_password[0].style.color = 'red';  
              document.getElementById('password').style.borderColor="red";
              document.getElementById('password').style.backgroundImage = "url('../images/icon-error.svg')";    
              document.getElementById('password').style.backgroundRepeat = "no-repeat";
              document.getElementById('password').style.backgroundPosition = "95%";
                          
          }
  }

 