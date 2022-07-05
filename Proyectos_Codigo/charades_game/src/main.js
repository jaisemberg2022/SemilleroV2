//variables
const indexGame = document.querySelector('#game_settings')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const rulesBtn = document.querySelector('#btnRules')
const sectionSettings = document.getElementById('setting')
const rulesPoopUp = document.querySelector('#poop')
const closePopup = document.querySelector('.closeRules')
//funciones
function displaySettings()
{
    sectionSettings.style.display = "flex";
    main.style.display = "none";
    footer.style.display="flex";
}

function displayRules()
{
    rulesPoopUp.style.display = "flex";
}
function closeRules()
{
    rulesPoopUp .style.display = "none";
}
//eventos
indexGame.addEventListener('click',displaySettings)
rulesBtn.addEventListener('click',displayRules)
closePopup.addEventListener('click',closeRules)