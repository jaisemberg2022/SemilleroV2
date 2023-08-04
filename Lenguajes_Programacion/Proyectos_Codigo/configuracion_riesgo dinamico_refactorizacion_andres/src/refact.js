const optionsArray = [...document.querySelectorAll("aside")],
  thArray = [...document.querySelectorAll("th")],
  thead = document.querySelector("thead"),
  tbody = document.querySelector("tbody"),
  module = document.getElementById("module"),
  newBtn = document.getElementById("newBtn"),
  xBtn = document.getElementById("x"),
  moduleHeader = document.getElementById("moduleHeader"),
  tableHeader = document.getElementById("tableHeader"),
  val1Label = document.getElementById("val1Label"),
  val2Container = document.getElementById("val2Container"),
  moduleBtn = document.getElementById("moduleBtn"),
  desc = document.getElementById("desc"),
  val1 = document.getElementById("val1"),
  val2 = document.getElementById("val2"),
  trash = document.querySelector(".trash"),
  pencil = document.querySelector(".pencil"),
  section_r = document.querySelector("#right"),

  confirm = document.querySelector("#confirm");

let ImpactArray = [],
  probArray = [],
  typeArray = [],
  evalArray = [];

const menu = [

  {id:1,
    name:"impactos",
    propierties:["codigo","descripcion","valor1"],
    actions:["editar","eliminar"]
  },
  {id:2,
    name:"probabilidades",
    propierties:["codigo","descripcion","valor1"],
    actions:["editar","eliminar"]
  },
  {id:3,
    name:"tipos de riesgo",
    propierties:["codigo","descripcion","interno"],
    actions:["editar","eliminar"]
  },
  {id:4,
    name:"evaluacion de riesgo",
    propierties:["codigo","descripcion","valor maximo","valor minimo"],
    actions:["editar","eliminar"]
  }

]
function createMenu()
{
  let options_container = document.getElementById('left')

  menu.forEach(option => {
    let aside = document.createElement('aside')
    aside.id = option.id
    aside.innerHTML = option.name
    aside.addEventListener("click", ()=>{
      createTable2(option)
    })
    // aside.addEventListener("click", createTable2(option.id), true)
    options_container.appendChild(aside)
  })
}
createMenu();
function createTable2(option){
  createEl("table","","table","",section_r)
  let ths=""
  option.propierties.map(propierty => 
  {
    ths += `<th>${propierty}</th> `
  })
  createEl("thead","","thead",ths,document.getElementById("table"))
 //consultar dtos yagregarlos al crear las tabla
 //crear los botones de acciones segun la propiedad de acciones
}

function createEl(name,text,id,innerH,parent)
{
  let element = document.createElement(name)
  element.innerText = text
  element.innerHTML = innerH
  element.id = id
  parent.appendChild(element)
}


