//variables
const main = document.querySelector('main')
const sectionSettings = document.getElementById('setting')
const footer = document.querySelector('footer')

const sectionStarGame = document.getElementById('startGameSection')
const rulesBtn = document.querySelector('#btnRules')
const modalScore = document.getElementById('poopScore')
const modalRules = document.getElementById('poop');
const btnStarGame = document.querySelector('.buttonStarGame')



//funciones
const expReg = 
{
    teamName: /^[a-zA-ZÀ-ÿ\s]{4,16}$/,
    pointsLimit: /^[0-9]+$/};
        const inputs = document.getElementsByTagName("input");
        let arrayInputs = Array.from(inputs);
        arrayInputs.forEach((input) => {
        input.addEventListener("keyup", validateInput);
  });
  function validateInput({target}) {
    expReg[`${target.name}`].test(target.value)
      ? target.style.border = "2px solid lime"
      : target.style.border = "2px solid red"
  }

function start()
  {
      const btnNextSite = [...document.querySelectorAll('#nextPart')]
      btnNextSite.forEach(btn =>
          {
              btn.addEventListener('click',()=>
              {
                  if (btn.classList.contains('toSettings')) 
                  {
                      main.style.display = "none";
                      sectionSettings.style.display = "flex";
                      footer.style.display="flex";
                  }
                  else if(btn.classList.contains('toStartGame'))
                  {

                      sectionSettings.style.display = "none";
                      footer.style.display="none";
                      sectionStarGame.style.display="flex";
                  }
              })
          })
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
function close()
{
    const closePoopUp = [...document.querySelectorAll('#closePopup')]
    closePoopUp.forEach(btn => 
    {
        btn.addEventListener('click',() =>
        {
            if(btn.classList.contains('closeRules') || btn.classList.contains('closeScore'))
            {       
                modalRules.style.display = "none";
                modalScore.style.display = "none";
            }
        })    
    })
}

  

//eventos
start()
display()
close();