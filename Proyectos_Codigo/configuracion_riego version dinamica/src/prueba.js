//variables
const optionsArray = [...document.querySelectorAll("aside")],
  thArray = [...document.querySelectorAll("th")],
  thead = document.querySelector("thead"),
  tbody = document.querySelector("tbody"),
  newBtn = document.getElementById("newBtn"),
  module = document.getElementById("module"),
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
  pencil = document.querySelector(".pencil");

let impactArray = [],
  probArray = [],
  typeArray = [],
  evalArray = [];
//fucniones

window.onload = function filters() {
  optionsArray.map((option) => {
    option.addEventListener("click", (e) => {
      let currentData = getData(e.target.innerText);
      tHeadMaker(e.target);
      tBodyMaker(currentData, e.target.innerText);
      let icons = [...document.querySelector("img")];

      icons.forEach((icon) => {
        icon.addEventListener("click", () => {
          if (icon.classList.contains("trash")) {
            deleteData(icon.id);
          } else {
            module.classList.toggle("hidden");
            editData(icon.id);
            xBtn.onclick = () => module.classList.toggle("hidden");
          }
        });
      });
    });
  });
};

document.body.addEventListener("click", (e) => {
  if (e.target !== newBtn && e.target !== xBtn) {
    return;
  }
  desc.value = "";
  val1.value = "";
  val2.value = "";

  module.classList.toggle("hidden");
});
moduleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createData();
  module.reset();
});

function getData() {
  let tableData = localStorage.getItem(
    document.querySelector("#tableHeader").innerText
  );
  return JSON.parse(tableData);
}

function tHeadMaker(option) {
  moduleHeader.innerText = option.innerText;
  tableHeader.innerText = option.innerText;

  switch (option.innerText) {
    case "EVALUACION DE RIESGO":
      thead.innerHTML = "";
      tbody.innerHTML = "";
      val2Container.classList.remove("hidden");
      val1Label.innerText = "valor minimo";
      evalRskTables();
      break;

    default:
      thead.innerHTML = "";
      tbody.innerHTML = "";
      val2Container.classList.add("hidden");
      val1Label.innerText = "valor";
      otherTables(option.innerText);
      break;
  }
}

function evalRskTables() {
  if (thArray.length > 5) {
    let newTh = document.createElement("thead");
    newBtn.innerText = "nueva";
    newTh.innerText = "accion";
    thArray.push(newTh);
  }
  thArray.map((th) => {
    let thTemplate = document.createElement("th");
    thTemplate.innerText = th.innerText;
    thead.append(thTemplate);
    thArray[0].style.width = "131px";
    thArray[1].style.width = "195px";
    thArray[2].style.width = "202px";
    thArray[2].innerText = "Valor Minimo";
    thArray[3].innerText = "Valor Maximo";
    thArray[3].style.width = "202px";
    thArray[4] ? (thArray[4].style.width = "114px") : "";
  });
}

function otherTables(option) {
  if (thArray.length > 4) {
    thArray.pop();
  }
  thArray.map((th) => {
    let thTemplate = document.createElement("th");
    thTemplate.innerText = th.innerText;
    thead.append(thTemplate);
    thArray[1].style.width = "329px";
    thArray[2].style.width = "132px";
    console.log(option);
    if (option == "TIPOS DE RIESGO") {
      newBtn.style.width = "100px";
      newBtn.innerText = "nuevo tipo";
      thArray[2].innerText = "interno";
      val1Label.innerText = "interno";
    } else {
      newBtn.style.width = "70px";
      newBtn.innerText = "nuevo";
      thArray[2].innerText = "valor";
    }

    thArray[3].innerText = "accion";
  });
}

function tBodyMaker(currentData, currentOption) {
  currentData.map((data) => {
    if (currentOption == "EVALUACION DE RIESGO") {
      tbody.innerHTML += `
            <tr>
             <td> 
            ${currentData.code}
             </td>
             <td> 
             ${currentData.desc}
              </td>
              <td> 
              ${currentData.va1}
               </td>
               <td> 
               ${currentData.val2}
                </td>

            <td> 
                <img src="./img/editar.svg" id="${currentData.code}" class="editar">
                <img src="./img/eliminar.svg" id="${currentData.code}" class="eliminar">
            </td>

            </tr>
            `;
    }
  });
}
function deleteData() {
  let currentData = getData();
  let newArray = currentData.filter((obj) => obj.code !== parseInt(id));
  localStorage.setItem(`${moduleHeader.innerText}`), JSON.stringify(newArray);
  location.reload();
}

function editData(id) {
  let currentData = getData();
  let currentObj = currentData.find((obj) => obj.code == parseInt(id));
  switch (moduleHeader.innerText) {
    case "EVALUACION DE RIESGO":
      desc.value = currentObj.desc;
      val1.value = currentObj.val1;
      val2.value = currentObj.val2;
      break;
    default:
      desc.value = currentObj.desc;
      val2.value = currentObj.val2;
      break;
  }
}

function createData() {
  switch (moduleHeader.innerText) {
    case "IMPACTOS":
      impactArray.push({
        code: Math.flor + Math.random() * 100,
        desc: desc.value,
        val: val1.value,
        val2: val2.value,
      });
      localStorage.setItem("IMPACTOS", JSON.stringify(impactArray));
    case "IMPACTOS":
      impactArray.push({
        code: Math.flor + Math.random() * 100,
        desc: desc.value,
        val: val1.value,
        val2: val2.value,
      });
      localStorage.setItem("IMPACTOS", JSON.stringify(impactArray));
      break;
    case "PROBABILIDADES":
      impactArray.push({
        code: Math.flor + Math.random() * 100,
        desc: desc.value,
        val: val1.value,
        val2: val2.value,
      });
      localStorage.setItem("PROBABILIDADES", JSON.stringify(impactArray));
      break;
    case "TIPO DE RIESGO":
      impactArray.push({
        code: Math.flor + Math.random() * 100,
        desc: desc.value,
        val: val1.value,
        val2: val2.value,
      });
      localStorage.setItem("TIPO DE RIESGO", JSON.stringify(impactArray));
      break;
    case "EVALUACION DE RIESGO":
      impactArray.push({
        code: Math.flor + Math.random() * 100,
        desc: desc.value,
        val: val1.value,
        val2: val2.value,
      });
      localStorage.setItem("EVALUACION DE RIESGO", JSON.stringify(impactArray));
      break;
  }
}
//eventos