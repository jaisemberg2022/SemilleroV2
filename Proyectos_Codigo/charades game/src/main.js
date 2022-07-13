//variables
const main = document.querySelector('main')
const sectionSettings = document.getElementById('setting')
const footer = document.querySelector('footer')
const sectionStarGame = document.getElementById('startGameSection')
const rulesBtn = document.querySelector('#btnRules')
const modalScore = document.getElementById('poopScore')
const modalRules = document.getElementById('poop');
const btnStarGame = document.querySelector('.toStartGame')

let inputValues = [...document.querySelectorAll('input')]
let inputOthers = inputValues.filter(input => input.classList.contains('other'))
;
//funciones

  

function filterInputsValue() {
    let arrayInput = new Array();
    let inputchekeds = inputValues.filter(input => input.checked == true)
    let inputOthers = inputValues.filter(input => input.classList.contains('other'))

    let inputs = inputchekeds.concat(inputOthers);
    namesValues = [].map.call(inputs, function (input) {
        arrayInput.push(input)
    })

    arrayInput.map(function (inputs) {
        let inputsV = [inputs.value]
        console.log(inputsV)
        return inputsV
    })
}

  
  function start()
  { 
      
      let secondGroup = document.querySelector('#secondGroup')
      let first = document.querySelector('#firstGroup')
      let points_number = document.querySelector('#points_number')
      const btnNextSite = [...document.querySelectorAll('#nextPart')]
      btnNextSite.forEach(btn => {
          btn.addEventListener('click', () => {
              if (btn.classList.contains('toSettings')) 
              {
                  main.style.display = "none";
                  sectionSettings.style.display = "flex";
                  footer.style.display = "flex";
              }
              else 
              {
                  if(secondGroup.value == "" || first.value == "" || points_number.value == "")
                  {
                      
                      const expReg =
                      {
                          teamName: /^[a-zA-ZÀ-ÿ\s]{4,16}$/,
                          pointsLimit: /^[0-9]+$/
                      };
                      const inputs = document.getElementsByTagName("input");
                      let arrayInputs = Array.from(inputs);
                      arrayInputs.forEach((input) => {
                          input.addEventListener("keyup", validateInput);
                      });
                      function validateInput({ target }) {
                          expReg[`${target.name}`].test(target.value)
                              ? target.style.border = "2px solid lime"
                              : target.style.border = "2px solid red"
                      }
  
                  }
                  else
                  {
                      sectionSettings.style.display = "none";
                      footer.style.display = "none";
                      sectionStarGame.style.display = "flex";          
                  }
                     
              }
          })
      })
  }
  
 function display() {

let ruido = document.querySelector(".sonido1");

let audioEtiqueta = document.querySelector("#audio1");
  ruido.addEventListener("click", () => {
  audioEtiqueta.setAttribute("src","./src/sonido.mp3");
  audioEtiqueta.play();
  console.log(`reproduccion: ${audioEtiqueta.src}`);
})
const openPoopUp = [...document.querySelectorAll('#openModalBtn')]
    openPoopUp.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('openRules')) {
                modalRules.style.display = "flex";
            }
            else if (btn.classList.contains('openScore')) {
                modalScore.style.display = "flex";
            }

        })
    })
}
function close() {
    const closePoopUp = [...document.querySelectorAll('#closePopup')]
    closePoopUp.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('closeRules') || btn.classList.contains('closeScore')) {
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
btnStarGame.addEventListener('click', filterInputsValue) 