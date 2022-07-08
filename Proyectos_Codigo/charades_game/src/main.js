//variables
const indexGame = document.querySelector('#game_settings')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const rulesBtn = document.querySelector('#btnRules')
const sectionSettings = document.getElementById('setting')

const modalScore = document.getElementById('poopScore')

const modalRules = document.getElementById('poop');





//funciones
function displaySettings()
{
    sectionSettings.style.display = "flex";
    main.style.display = "none";
    footer.style.display="flex";
}
function display()
{

    const openPoopUp = [...document.querySelectorAll('#openModalBtn')]

    openPoopUp.forEach(btn => 
    {
        btn.addEventListener('click',() =>
        {
            if(btn.classList.contains('openRules'))
            {       
                modalRules.style.display = "flex";
            }
            else if(btn.classList.contains('openScore'))
            {
                modalScore.style.display = "flex";
            }

        })    
    })

}


display()

function close()
{
   
}
//eventos
