//variables
let nuevo_impacto = document.querySelector("#Impactos");
let nueva_probabilidad = document.querySelector("#probabilidades");
let nuevo_tipo_Riesgo = document.querySelector("#tipo_Riesgo");
let nueva_evaluacion_Riesgo = document.querySelector("#evaluacion_Riesgo");

let nav = document.querySelector("#nav");
let container_form = document.querySelector("#poop");
let close_button = document.querySelector("#close");
let thead = document.querySelector("#thead");
let tbody = document.querySelector('#tbody');
let title_form = document.querySelector("#title_form");
let elBtns = [];
let edBtns = [];
let modEdit = false; 
//funciones

function createNav(tagName, id, texto, parent) {
  if (parent.querySelector(tagName)) {
    parent.querySelector(tagName).remove();
  }
  let element;
  nav.style.display = "flex";
  element = document.createElement(`${tagName}`);
  element.id = `${id}`;
  element.innerHTML = `${texto}`;
  parent.append(element);
};
function createTbody(tagName, id, parent) {
  if (parent.querySelector(tagName)) {
    parent.querySelector(tagName).remove();
  }
  let element = document.createElement(`${tagName}`);
  element.id = `${id}`;
  parent.append(element);
};
function display_form() {
  container_form.style.display = "flex";
};
function close_form() {
  container_form.style.display = "none";
};
function deleteRows({target}) {
let currentData = document.querySelector('h3').innerText;
  let datosRecibidos = [...JSON.parse(localStorage.getItem(`${currentData.toLowerCase()}`))] || [];
 let nuevo_arreglo =  datosRecibidos.filter(datos => datos.id_impacto != target.id);
  localStorage.setItem( `${currentData.toLowerCase()}`,JSON.stringify(nuevo_arreglo) );
  location.reload();
};
function editElement({target})
{
  modEdit = true;
  const fila = document.getElementById(`${target.id}`);
  title_form.innerText=`Editar (${target.id}) `
  container_form.style.display ="flex";
  document.getElementById('codigo_impacto').value=`${fila.children[1].innerText}`;
  document.getElementById('descripcion_impacto').value=`${fila.children[2].innerText}`;
  document.getElementById('valor_impacto').value=`${fila.children[3].innerText}`;
};



function nuevoImpacto() {
  let id_impacto;
  let contador;
  let form_container = document.getElementById("form_container");
  title_form.innerHTML = "Nuevo Impacto";
  let impactos = JSON.parse(localStorage.getItem("impactos")) || [];
  function addForm(form_container) {
    form_container.innerHTML = `
            <form id="form_impacto">
                    <div class="container_inputs">
                    <label for="codigo_impacto" >codigo:</label>
                    <input type="number" id="codigo_impacto" name="codigo_impacto"  required>
                </div>
                <div class="container_inputs">
                    <label for="descripcion_impacto">descripcion:</label>
                    <input type="text" id="descripcion_impacto" name="descripcion_impacto" required>
                </div>
                <div class="container_inputs">
                    <label for="valor_impacto">valor</label>
                    <input type="number" id="valor_impacto" name="valor_impacto" required>
                </div>
                <footer>
                    <input type="submit" id="submit_impacto"  required>
                </footer> 
            </form>
            `;
  }
  function CreateThead(thead) {
    thead.innerHTML = `
            <tr>
            <th>id</th>
                <th>codigo</th>
                <th>descripcion</th>
                <th>valor</th>
                <th>accion</th>
            </tr>
            `;
  }
  addForm(form_container);
  let form_impacto = document.querySelector("#form_impacto");
  function mapItemsImpactos(elements, tbody) {
    tbody.innerHTML = elements.map((element) => {
        return `
                <tr id="${element.id_impacto}" class="tr_body" >
                    <td>${element.id_impacto}</td>
                    <td id="codigo">${element.code_impacto}</td>
                    <td id="descripcion">${element.description_impacto}</td>
                    <td id="valor">${element.value_impacto}</td>
                    <td>
                        <img src="./images/editar.svg" id="${element.id_impacto}" class="editar">
                        <img src="./images/eliminar.svg" id="${element.id_impacto}" class="eliminar">
                    </td>
                </tr>
                `;
      }).join("");

        elBtns = [...document.querySelectorAll(".eliminar")];
        edBtns = [...document.querySelectorAll(".editar")];

    elBtns.forEach((btn) =>
      {
        btn.addEventListener("click", (e) => 
        {
          deleteRows(e);
        })
      }
    );

    edBtns.forEach((btnEd) =>
      {
        btnEd.addEventListener("click",(e)=>
        {
          editElement(e);
        })
      }
    );
  }
  function addItemsImpactos() {
    contador = elBtns.length;
    id_impacto = contador+1;
    const code_impacto = document.querySelector("[name=codigo_impacto]").value;
    const description_impacto = document.querySelector(
      "[name=descripcion_impacto]"
    ).value;
    const value_impacto = document.querySelector("[name=valor_impacto]").value;
    const impacto = {
    id_impacto ,
      code_impacto,
      description_impacto,
      value_impacto,
    };
    impactos.push(impacto);
    localStorage.setItem("impactos", JSON.stringify(impactos));
    close_form();
    mapItemsImpactos(impactos, tbody);
  }
  createNav("h3", "impactos", "IMPACTOS", nav);
  createNav("button", "nuevo_impacto", "nuevo", nav);
  let new_botton_impacto = document.getElementById("nuevo_impacto");
  new_botton_impacto.addEventListener("click", display_form);
  close_button.addEventListener("click", close_form);
  CreateThead(thead);
  createTbody("tbody", "tbody", table);
  let tbody = document.getElementById("tbody");
  mapItemsImpactos(impactos, tbody);
  form_impacto.addEventListener("submit", (e) => {
    e.preventDefault();
    modEdit ? addItemsImpactos() :actualizarDatos()
    form_impacto.reset();
  });
};
//eventos
nuevo_impacto.addEventListener("click", nuevoImpacto);

