<<<<<<< HEAD
button.addEventListener("click",change_styles)

function change_styles(){
       document.getElementById('main').style.backgroundColor="#1D2029";
       document.getElementById('button').style.background = "linear-gradient(252.19deg, #3FCD95 -18.95%, #3F95D0 125.54%)";
       document.getElementById('body').style.backgroundColor="#1D2029";
       document.getElementById('dot').style.backgroundColor=" #1D2029";
       document.getElementById('dot').style.marginLeft="1px";

       let elements_grids_1 = document.querySelectorAll('.grid_iten')
        elements_grids_1.forEach(element =>   {
            element.style.backgroundColor= "#252B43";
            console.log(element)
        });

        let elements_grids_2 = document.querySelectorAll('.gird_2_item')
        elements_grids_2.forEach(element =>   {
            element.style.backgroundColor= "#252B43";
            console.log(element)
        });   
        
        let elements_class_p = document.querySelectorAll('.number')
        elements_class_p.forEach(element =>   {
            element.style.color= "#fff";
            console.log(element)
        });   

         
        let elements_class_p_2 = document.querySelectorAll('.p_2')
        elements_class_p_2.forEach(element =>   {
            element.style.color= "#fff";
            console.log(element)
        });   

         
        let elements_h1 = document.querySelectorAll('h1')
        elements_h1.forEach(element =>   {
            element.style.color= "#fff";
            console.log(element)
        });   

        
=======
button.addEventListener("click",change_styles)

function change_styles(){
       document.getElementById('main').style.backgroundColor="#1D2029";
       document.getElementById('button').style.background = "linear-gradient(252.19deg, #3FCD95 -18.95%, #3F95D0 125.54%)";
       document.getElementById('body').style.backgroundColor="#1D2029";
       document.getElementById('dot').style.backgroundColor=" #1D2029";
       document.getElementById('dot').style.marginLeft="1px";

       let elements_grids_1 = document.querySelectorAll('.grid_iten')
        elements_grids_1.forEach(element =>   {
            element.style.backgroundColor= "#252B43";
            console.log(element)
        });

        let elements_grids_2 = document.querySelectorAll('.gird_2_item')
        elements_grids_2.forEach(element =>   {
            element.style.backgroundColor= "#252B43";
            console.log(element)
        });   
        
        let elements_class_p = document.querySelectorAll('.number')
        elements_class_p.forEach(element =>   {
            element.style.color= "#fff";
            console.log(element)
        });   

         
        let elements_class_p_2 = document.querySelectorAll('.p_2')
        elements_class_p_2.forEach(element =>   {
            element.style.color= "#fff";
            console.log(element)
        });   

         
        let elements_h1 = document.querySelectorAll('h1')
        elements_h1.forEach(element =>   {
            element.style.color= "#fff";
            console.log(element)
        });   

        
>>>>>>> 95f67c40957e1e476b87ee4e90cefd7afc2b05de
    }