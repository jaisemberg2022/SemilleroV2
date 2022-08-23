<<<<<<< HEAD
let togle = document.getElementById('togle')
let form = document.getElementById('info')
let openForm = true;
let epmloyeeData =[...document.querySelectorAll('.epmloyeeData')]

function personalInfoArray()
{
  return fetch ("/data/Información_del_perfil.json").then((response) => response.json()).then((dataInfo) => 
    {
      return dataInfo;
    });   
}
personalInfoArray().then(function(dataInfo)
{
  dataInfo = Object.entries(dataInfo)
  createDataHeader(dataInfo)
})

function createDataHeader(dataInfo)
{
  console.log(dataInfo)
  epmloyeeData.forEach(element => 
    {
      if(element.id == "first")
      {
        element.innerHTML = 
        `
         <header>
            <h3 class="nombre">${dataInfo[4][1].primerNombre} ${dataInfo[4][1].primerApellido}<img src="/images/edit.svg" alt=""><h3>
            <h4 class="cargo">${dataInfo[2][1].toUpperCase() }</h4>
         </header>

          <div class="container">
            <h5 class="title">Area:</h5>
            <span class="descripction">${dataInfo[3][1]}</span>
          </div>

          <div class="container">
            <h5 class="title">Identifiacion:</h5>
            <span class="descripction">${dataInfo[4][1].tipoDocumento}-${dataInfo[4][1].identificacion}</span>
          </div>

          <div class="container">
            <h5 class="title">Fecha de ingreso:</h5>
            <span class="descripction">${dataInfo[5][1]}</span>
          </div>

          <div class="container">
            <h5 class="title">Correo:</h5>
            <span class="descripction">${dataInfo[4][1].correoElectronico}</span>
          </div>
        `
      }
      else if(element.id == "second")
      {
        element.innerHTML = 
        `
        <header>
          <h5 class="salario">${dataInfo[11][0]}</h5>
          <h3 class="valorSalario">${dataInfo[11][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</h3>
          <h4 class="tipoSalario">${dataInfo[10][1]}</h4>  
        </header>

        <div class="container">
          <h5 class="title">Valor Hora:</h5>
          <span class="descripction">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</span>
        </div>


        <div class="container">
          <h5 class="title">Jornada:</h5>
          <p class="descripction">${dataInfo[9][1].descripcion}</p>
        </div>
        `
      }
      else
      { 
        element.innerHTML = 
        `
        <header>
            <div class="container">
              <h5 class="title">Ultima Liquidacion:</h5>
              <input type="checkbox" name="checked" id="yes-no" checked>
            </div>
        </header>
        
        
        <div class="container">
          <h3 class="nombre">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</h3>
          <a href="" style="color: #3ec8ba;"><img src="./images/reload.svg" alt=""> Actualizar</a>
        </div>
        
                
        <div class="container">
          <a href="" style="color: #849d64;"><img src="./images/circular-diagram.svg" alt="">Liquidacion</a>
          <a href="" style="color: #648a37;"><img src="./images/list.svg" alt="">Bitakora</a>
        </div>
        
        `
      }
    })
}

togle.addEventListener('click', () =>
{
    openForm = !openForm
    if(openForm == false)
    {
        togle.children[0].src="./images/down.svg"
        togle.children[1].innerText = "Desplegar Perfil"
        form.style.display = "none"
    }
    else
    {
        togle.children[0].src="./images/up.svg"
        togle.children[1].innerText = "Ocultar Perfil"
        form.style.display = "flex"
        !openForm
    }
})


=======
let togle = document.getElementById('togle')
let form = document.getElementById('info')
let openForm = true;
let epmloyeeData =[...document.querySelectorAll('.epmloyeeData')]

function personalInfoArray()
{
  return fetch ("/data/Información_del_perfil.json").then((response) => response.json()).then((dataInfo) => 
    {
      return dataInfo;
    });   
}
personalInfoArray().then(function(dataInfo)
{
  dataInfo = Object.entries(dataInfo)
  createDataHeader(dataInfo)
})

function createDataHeader(dataInfo)
{
  console.log(dataInfo)
  epmloyeeData.forEach(element => 
    {
      if(element.id == "first")
      {
        element.innerHTML = 
        `
         <header>
            <h3 class="nombre">${dataInfo[4][1].primerNombre} ${dataInfo[4][1].primerApellido}<img src="/images/edit.svg" alt=""><h3>
            <h4 class="cargo">${dataInfo[2][1].toUpperCase() }</h4>
         </header>

          <div class="container">
            <h5 class="title">Area:</h5>
            <p class="descripction">${dataInfo[3][1]}</p>
          </div>

          <div class="container">
            <h5 class="title">Identifiacion:</h5>
            <p class="descripction">${dataInfo[4][1].tipoDocumento}-${dataInfo[4][1].identificacion}</p>
          </div>

          <div class="container">
            <h5 class="title">Fecha de ingreso:</h5>
            <p class="descripction">${dataInfo[5][1]}</p>
          </div>

          <div class="container">
            <h5 class="title">Correo:</h5>
            <p class="descripction">${dataInfo[4][1].correoElectronico}</p>
          </div>
        `
      }
      else if(element.id == "second")
      {
        element.innerHTML = 
        `
        <header>
          <h5 class="salario">${dataInfo[11][0]}</h5>
          <h3 class="valorSalario">${dataInfo[11][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</h3>
          <h4 class="tipoSalario">${dataInfo[10][1]}</h4>  
        </header>

        <div class="container">
          <h5 class="title">Valor Hora:</h5>
          <p class="descripction">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</p>
        </div>


        <div class="container">
          <h5 class="title">Jornada:</h5>
          <p class="descripction">${dataInfo[9][1].descripcion}</p>
        </div>
        `
      }
      else
      { 
        element.innerHTML = 
        `
        <header>
            <div class="container">
              <h5 class="title">Ultima Liquidacion:</h5>
              <input type="checkbox" name="checked" id="yes-no" checked>
            </div>
        </header>
        
        
        <div class="container">
          <h3 class="nombre">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</h3>
          <a href="" style="color: #3ec8ba;"><img src="./images/reload.svg" alt=""> Actualizar</a>
        </div>
        
                
        <div class="container">
          <a href="" style="color: #849d64;"><img src="./images/circular-diagram.svg" alt="">Liquidacion</a>
          <a href="" style="color: #648a37;"><img src="./images/list.svg" alt="">Bitakora</a>
        </div>
        
        `
      }
    })
}

togle.addEventListener('click', () =>
{
    openForm = !openForm
    if(openForm == false)
    {
        togle.children[0].src="./images/down.svg"
        togle.children[1].innerText = "Desplegar Perfil"
        form.style.display = "none"
    }
    else
    {
        togle.children[0].src="./images/up.svg"
        togle.children[1].innerText = "Ocultar Perfil"
        form.style.display = "flex"
        !openForm
    }
})


>>>>>>> 6fa215a4b52bb2e9f718239580c91641fea0f878
