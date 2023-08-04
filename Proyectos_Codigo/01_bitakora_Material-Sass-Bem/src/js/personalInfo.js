let togle = document.getElementById('togle');
let mesage = document.getElementById('mesage');
let icon_toggle = document.getElementById('icon-up-down');
let openForm = true;
let personal_info = document.getElementById('containerPersonalInfo'); 
let listEmployeeData = [...document.querySelectorAll('.list-Employee-data')];

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
  listEmployeeData.forEach(element => 
    {
      if(element.id == "first")
      {
        element.innerHTML = 
        `     
        <header>
          <h2 class="title-secundary">${dataInfo[4][1].primerNombre} ${dataInfo[4][1].primerApellido} <a class="Anchor-links-tertiary" href="#"> <i class="material-icons Anchor-links-tertiary__edit-two">edit</i></a> </h2>
          <span class="contador">${dataInfo[2][1].toUpperCase() }</span>
        </header>

          <li>
            <span class="sub-title_secundary">Área:</span>
            <div class="appex" >${dataInfo[3][1]}</div> 
          </li>

          <li>
            <span class="sub-title_secundary">Identificación:</span>
            <div class="appex">${dataInfo[4][1].tipoDocumento}-${dataInfo[4][1].identificacion}</div> 
          </li>
          
          <li>
            <span class="sub-title_secundary">Fecha de ingreso:</span>
            <div class="appex">${dataInfo[5][1]}</div> 
          </li>

          <li>
            <span class="sub-title_secundary">Correo:</span>
            <div class="appex">${dataInfo[4][1].correoElectronico}</div> 
          </li>
        `
      }
      else if(element.id == "second")
        {
          element.innerHTML = 
          `
          <header>
            <span class="sub-title_secundary" >${dataInfo[11][0]}</span>
            <p class="title-secundary">${dataInfo[11][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</p>
            <p class="contador">${dataInfo[10][1]}</p>  
          </header>

          <li>
            <span class="sub-title_secundary" >Valor Hora:</span>
            <div class="appex">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</div>
          </li>

          <li>
            <span class="sub-title_secundary">Jornada:</span>
            <div class="appex">${dataInfo[9][1].descripcion}</div>
          </li>
          `
        }
      else
      { 
        element.innerHTML = 
        `
        <header>
              <span class="sub-title_secundary">Ultima Liquidacion:</span>
              <div class="container-round-checked">
                <input type="checkbox" checked id="checkbox"/>
                <label for="checkbox"></label>
            </div>
        </header>        

        <li>
          <p class="title-secundary">${dataInfo[12][1].valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}</p>
          <a class="Anchor-links-fourth" href="#"> <i class="material-icons Anchor-links-fourth__actualize">rotate_right</i> Actualizar</a>
        </li>
          
        <li" class="options">
              <a class="Anchor-links-fifth" href="#"> <i class="material-icons Anchor-links-fifth__class">data_usage</i> Liquidacion</a>
              <a class="Anchor-links-sixth" href="#"><i class="material-icons Anchor-links-sixth__icon-list">list</i> Bitakora</a>
        </li>
        `
      }
      console.log(dataInfo[5][1])
    })
}
togle.addEventListener('click', () =>
{
    openForm = !openForm;
    if(openForm == false)
    {
      icon_toggle.innerText= "expand_more"
      personal_info.style.display = "none"
      !openForm
    }
    else
    {
      icon_toggle.innerText= "expand_less"
      personal_info.style.display = "flex"
      !openForm
    }
})


