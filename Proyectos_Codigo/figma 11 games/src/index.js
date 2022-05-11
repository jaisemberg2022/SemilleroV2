let random = Math.floor(Math.random()*3)
let modal = document.getElementById("myModal");
let alert = document.getElementsByClassName('alert')

console.log(alert);


      function open_Modal() {
        modal.style.display = "flex";
      }

      function Close_Modal() {
        modal.style.display = "none";
      }

      function abc(){
        document.getElementById('one').style.backgroundImage="none";
        document.getElementById('a_2').style.display="none";
        document.getElementById('scissors').style.display="none";
        document.getElementById('computer_selection').style.backgroundColor="#17223E"   
             
      }