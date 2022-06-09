//varables
const fecha = document.getElementById("fecha");
const inputs = document.querySelectorAll("input");
const img_button = document.getElementById("img_button");
let today = new Date();
let year = today.getFullYear();
let monht = today.getMonth() + 1;
let day = today.getDay();
let hour = addZero(today.getHours());
let minute = addZero(today.getMinutes());
let seconds = addZero(today.getSeconds());
let date = `${year}/0${monht}/${day}-${hour}:${minute}:${seconds}`;
let currencySelect = document.getElementById("currencySelect");
//funciones
function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

fecha.innerText = date;

//eventos
img_button.addEventListener("click", () => {
  img_button.classList.toggle("active");
});

fetch("./data/playData.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(Array.from(data));
    Object.entries(data).forEach((currency) => {
      let option = document.createElement("option");

      option.innerText = currency;

      currencySelect.append(option);
    });
  });
