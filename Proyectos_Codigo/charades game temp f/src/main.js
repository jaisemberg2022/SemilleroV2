//variables
const main = document.querySelector("main");
const sectionSettings = document.getElementById("setting");
const footer = document.querySelector("footer");
const sectionStarGame = document.getElementById("startGameSection");
const rulesBtn = document.querySelector("#btnRules");
const modalScore = document.getElementById("poopScore");
const modalRules = document.getElementById("poop");
const btnStarGame = document.querySelector(".toStartGame");

let inputValues = [...document.querySelectorAll("input")];
let newValues = []
let segundos;
//funciones
function filterInputsValue() {

  let inputchekeds = inputValues.filter((input) => input.checked == true);
  let inputOthers = inputValues.filter((input) =>
    input.classList.contains("other")
  );
  let inputs = inputchekeds.concat(inputOthers);
  namesValues = [].map.call(inputs, function (input) {
    newValues.push(input.value);
    return newValues;
  });
  llenarCamposScoreBoard(newValues) 
  console.log(newValues) 
}
function llenarCamposScoreBoard(newValues) {
  let ElemetsScore = [...document.querySelectorAll(".ValueScore")];
  ElemetsScore.forEach((element) => {
    if (element.classList.contains("FirstGroupName")) {
      element.innerHTML = newValues[2];
    }
    if (element.classList.contains("limit_points")) {
      element.innerHTML = `${newValues[4]} points`;
    }
    if (element.classList.contains("SecondGroup")) {
      element.innerHTML = `${newValues[3]}`;
    }
  });
}
function timer (newValues)
{
  let temporizador = document.getElementById('temporizador')
  let segundos = newValues[1]
  let correctBtn = document.getElementById('buttonCorrect')
  let incorrectBtn = document.getElementById('buttonIncorrect')
  let h2 = document.querySelector('.timeResult')
  const nextWordBtn = document.getElementById('buttonNextWord')
  let randomWord = document.querySelector('#randomWord')

    setInterval(()=>
    {
        segundos--;
        temporizador.innerHTML = segundos
        correctBtn.addEventListener('click',()=>
         {
             clearInterval(timer)
             h2.innerText = "respuesta correcta"
             nextWordBtn.style.display="flex"
             nextWordBtn.style.backgroundColor = "lime"
             randomWord.innerHTML = 'asp';
         })

         if(segundos < 10)
         {
             temporizador.innerText=`0${segundos}`
         }

         if(segundos == 0)
         {
             clearInterval(timer)
             h2.innerText= "punto incorrecto"
             correctBtn.style.display="none"
             incorrectBtn.style.display="flex"
             nextWordBtn.style.display="flex"
             nextWordBtn.style.backgroundColor="red"
         }
    },1000);
}



let ruido = document.querySelector(".sonido1");
let audioEtiqueta = document.querySelector("#audio1");
ruido.addEventListener("click", () => {
  audioEtiqueta.setAttribute("src", "./src/inicio.wav");
  audioEtiqueta.play();
});


function start(e) {
  let ruido2 = document.querySelector(".sonido2");
  let audioEtiqueta2 = document.querySelector("#audio2");
  ruido2.addEventListener("click", () => {
    audioEtiqueta2.setAttribute("src", "./src/inicio.wav");
    audioEtiqueta2.play();
  });

  let secondGroup = document.querySelector("#secondGroup");
  let first = document.querySelector("#firstGroup");
  let points_number = document.querySelector("#points_number");
  const btnNextSite = [...document.querySelectorAll(".nextPart")];
  const expReg = {
    teamName: /^[a-zA-ZÀ-ÿ\s]{4,16}$/,
    pointsLimit: /^[0-9]+$/,
  };
  function validateInput({ target }) {
    expReg[`${target.name}`].test(target.value)
      ? target.classList.add("incomplete")
      : target.classList.remove("incomplete");
  }
  btnNextSite.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.classList.contains("toSettings")) {
        main.style.display = "none";
        sectionSettings.style.display = "flex";
        footer.style.display = "flex";
      } 
      else if (
          secondGroup.value == "" ||
          first.value == "" ||
          points_number.value == ""
        ) {
          const inputs = document.getElementsByTagName("input");
          let arrayInputs = Array.from(inputs);
          arrayInputs.forEach((input) => {
            input.addEventListener( "keyup", (e)=> validateInput(e));
          });

        }
        else 
        {
            filterInputsValue()
            timer(newValues)
            sectionSettings.style.display = "none";
            footer.style.display = "none";
            sectionStarGame.style.display = "flex";
            return e.target.setAttribute.name != "starGame"
            ? e.preventDefault()
            : "";
        }   
    
    });
});
}


let ruido2 = document.querySelector(".sonido3");
let audioEtiqueta2 = document.querySelector("#audio3");
ruido2.addEventListener("click", () => {
  audioEtiqueta2.setAttribute("src", "src/puntoBien.wav");
  audioEtiqueta2.play();
});
let ruido3 = document.querySelector(".sonido4");
let audioEtiqueta3 = document.querySelector("#audio4");
ruido3.addEventListener("click", () => {
  audioEtiqueta3.setAttribute("src", "./src/puntoMal.wav");
  audioEtiqueta3.play();
});
  const buttonHome = document.querySelector(".buttonHome");
  buttonHome.addEventListener("click", ()=>{
    main.style.display = "flex";
    sectionStarGame.style.display = "none";
  })






function display() {
  const openPoopUp = [...document.querySelectorAll(".openModalBtn")];
  openPoopUp.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("openRules")) {
        modalRules.style.display = "flex";
      } else if (btn.classList.contains("openScore")) {
        modalScore.style.display = "flex";
      }
    });
  });
}
function close() {
  const closePoopUp = [...document.querySelectorAll("#closePopup")];
  closePoopUp.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (
        btn.classList.contains("closeRules") ||
        btn.classList.contains("closeScore")
      ) {
        modalRules.style.display = "none";
        modalScore.style.display = "none";
      }
    });
  });
}
//eventos
start();
display();
close();

