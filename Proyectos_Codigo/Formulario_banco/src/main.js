//varables
const fecha = document.getElementById('fecha');
const inputs = document.querySelectorAll('input');
const img_button = document.getElementById('img_button');
//funciones
//eventos


fecha.textContent = new Date(Date.now()).toISOString();

img_button.addEventListener('click', () => {
    img_button.classList.toggle('active')
})

let arrayInputs = Array.from(inputs);
arrayInputs.forEach((input) => {
    input.addEventListener("click", validarInput);
})

validarInput = (e) = {

}