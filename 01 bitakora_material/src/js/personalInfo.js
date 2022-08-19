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
  aa(dataInfo)
})

function aa(dataInfo)
{
  console.log(dataInfo)
  epmloyeeData.forEach(element => 
    {
      if(element.id == "first")
      {
        element.innerHTML = 
        `
         <header>
            <h4 class="nombre">${dataInfo[4][1].primerNombre} ${dataInfo[4][1].primerApellido} <img src="/images/edit.svg" alt=""> <h4>
            <h5 class="cargo">${dataInfo[2][1].toUpperCase() }</h5>
         </header>

         <span class="title">Area:<p class="descripction">${dataInfo[3][1]}</p></span>
         <span class="title">Identifiacion:<p class="descripction">${dataInfo[4][1].tipoDocumento}-${dataInfo[4][1].identificacion}</p></span>
         <span class="title">Fecha de ingreso:<p class="descripction">${dataInfo[5][1]}</p></span>
         <span class="title">Correo:<p class="descripction">${dataInfo[4][1].correoElectronico}</p></span>
        `
      }
      else if(element.id == "second")
      {
        element.innerHTML = 
        `
        <header>
          <h4 class="salario">${dataInfo[11][0]}</h4>
          <p class="valorSalario">${dataInfo[11][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</p>
          <p class="tipoSalario">${dataInfo[10][1]}</p>  
        </header>

        <span class="title">Valor Hora:<p class="descripction">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</p></span>
        <span class="title">Jornada:<p class="descripction">${dataInfo[9][1].descripcion}</p></span>
        `
      }
      else
      { 
        element.innerHTML = 
        `
        <header>
          <span class="title">Ultima Liquidacion<input type="checkbox" name="checked" id="yes-no" checked ></span>
        </header>
        
        
        <div class="title">
          <p class="nombre">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</p>
          <a href="" style="color: #3ec8ba;"><img src="./images/reload.svg" alt=""> Actualizar</a>
        </div>
        
                
        <div class="title">
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


