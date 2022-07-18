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
};
function score (){
const score_group = [...document.querySelectorAll(".score_group")];
countTeam1 = 0;
countTeam2 = 0;
score_group[1] = countTeam1;
score_group[2] = countTeam2;


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
function TimerQuestion (newValues)
{
  let temporizador = document.getElementById('temporizador')
  let segundos = newValues[1]
  let correctBtn = document.getElementById('buttonCorrect')
  let incorrectBtn = document.getElementById('buttonIncorrect')
  let h2 = document.querySelector('.timeResult')
  const nextWordBtn = document.getElementById('buttonNextWord')
  let randomWord = document.querySelector('#randomWord')

    const time = setInterval(()=>
    {
      
        segundos--;
        console.log(segundos)
        temporizador.innerHTML = segundos
        correctBtn.addEventListener('click',()=>
         {
             clearInterval(time)
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
        
             clearInterval(time)
             h2.innerText= "punto incorrecto"
             correctBtn.style.display="none"
             incorrectBtn.style.display="flex"
             nextWordBtn.style.display="flex"
             nextWordBtn.style.backgroundColor="red"
           ;
         }
    },1000);
}
let ruido = document.querySelector(".sonido1");
let audioEtiqueta = document.querySelector("#audio1");
ruido.addEventListener("click", () => {
  audioEtiqueta.setAttribute("src", "./src/inicio.wav");
  audioEtiqueta.play();
});
function start() {
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
            TimerQuestion(newValues)
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
    location.reload();
  })
//lOGICA DE LAS PALABRAS
let numerosqYaSalieron = [];
let yaSalieronTodos = false;
function wordsJs() {
  if (!yaSalieronTodos) {
    fetch("data/wordsJS.JSON")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then(function (jsonData) {
        if (!yaSalieronTodos) {
          let aleatorio = Math.floor(
            Math.random() * Object.keys(jsonData).length + 1
          ).toString();
          var lenghtJs = Object.keys(jsonData).length;
          while (
            numerosqYaSalieron.filter((num) => num == aleatorio).length > 0 &&
            numerosqYaSalieron.length < lenghtJs &&
            yaSalieronTodos == false
          ) {
            aleatorio = Math.floor(
              Math.random() * Object.keys(jsonData).length + 1
            ).toString();
          }
          if (numerosqYaSalieron.length == Object.keys(jsonData).length) {
            console.log("Ya salieron todos los elementos del array preubas");
            yaSalieronTodos = true;
          } else {
            var resp = jsonData["wordsJs" + aleatorio];
            numerosqYaSalieron.push(aleatorio);

            console.log( "java: "+ resp);
          }
        } else {
          console.log("Ya salieron todos los elementos del array");
        }
      });
  } else {
    console.log("Ya salieron todos los elementos del array");
  }
}
wordsJs();

let numerosqueYaSalieron = [];
let yaSalieronTodas = false;
function wordsEnglis() {
  if (!yaSalieronTodas) {
    fetch("data/wordsEnglish.json")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then(function (jsonData) {
        if (!yaSalieronTodas) {
          let aleatorio = Math.floor(
            Math.random() * Object.keys(jsonData).length + 1
          ).toString();
          var lenghtJs = Object.keys(jsonData).length;
          while (
            numerosqueYaSalieron.filter((num) => num == aleatorio).length > 0 &&
            numerosqueYaSalieron.length < lenghtJs &&
            yaSalieronTodas == false
          ) {
            aleatorio = Math.floor(
              Math.random() * Object.keys(jsonData).length + 1
            ).toString();
          }
          if (numerosqueYaSalieron.length == Object.keys(jsonData).length) {
            console.log("Ya salieron todos los elementos del array preubas");
            yaSalieronTodos = true;
          } else {
            var resp = jsonData["English: " + aleatorio];
            numerosqueYaSalieron.push(aleatorio);

            console.log('english'+resp);
          }
        } else {
          console.log("Ya salieron todos los elementos del array");
        }
      });
  } else {
    console.log("Ya salieron todos los elementos del array");
  }
}
wordsEnglis()
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
