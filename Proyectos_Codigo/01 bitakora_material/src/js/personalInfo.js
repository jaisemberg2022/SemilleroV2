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
          <h3 class="nombre">${dataInfo[4][1].nombreCompleto} <img src="/images/edit.svg" alt=""> <h3>
          <h5 class="cargo">${dataInfo[2][1].toUpperCase() }</h5>
          
            <div class="containerCategories">
              <h5 class="title">Area:</h5>
              <p class="descripction">${dataInfo[3][1]}</p>
            </div>
      
            <div class="containerCategories">
              <h5 class="title">Identificacion:</h5>
              <p class="descripction">${dataInfo[4][1].tipoDocumento}-${dataInfo[4][1].identificacion}</p>
            </div>
      
            <div class="containerCategories">
              <h5 class="title">Fecha de ingreso:</h5>
              <p class="descripction">${dataInfo[5][1]}</p>
            </div>
      
            <div class="containerCategories">
              <h5 class="title" >Correo:</h5>
              <p class="descripction">${dataInfo[4][1].correoElectronico}</p>
            </div>
        `
      }
      else if(element.id == "second")
      {
        element.innerHTML = 
        `
        <h3 class="salario">${dataInfo[11][0]}</h3>
        <p class="valorSalario">${dataInfo[11][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</p>
        <p class="tipoSalario">${dataInfo[10][1]}</p>
        
        <div class="containerCategories">
              <h5 class="title">Valor Hora:</h5>
              <p class="descripction">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</p>
        </div>

        <div class="containerCategories">
          <h5 class="title">Jornada</h5>
          
          <p class="descripction">${dataInfo[9][1].descripcion}</p>
        </div>

        `
      }
      else
      { 
        element.innerHTML = 
        `
        <div class="containerCategories" id="ultimaLiquidacion">
            <label class="salario" for="yes-no">Ultima Liquidacion</label>  
            <input type="checkbox" name="checked" id="yes-no" >
        </div> 
        
        <div class="containerCategories" id="ultimaLiquidacion">
            <p class="valorSalario">${dataInfo[15][1].toLocaleString("en-US", {style:"currency", currency:"COP"})}</p>
            <a href=""> <img src="/images/reload.svg" alt="">  Actualizar</a>
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


