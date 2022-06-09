//varables
const fecha = document.getElementById('fecha');
const inputs = document.querySelectorAll('input');
const img_button = document.getElementById('img_button');


//funciones
fecha.textContent = new Date(Date.now()).toISOString();

let arrayInputs = Array.from(inputs);
arrayInputs.forEach((input) => {
    input.addEventListener("click", validarInput);
})


document.addEventListener('DOMContentLoaded',()=>{
    const divisas = document.querySelector('#select_moneda_dropdown');
    fetch("../")
});
//eventos


img_button.addEventListener('click', () => {
    img_button.classList.toggle('active')
})


validarInput = (e) = {
}