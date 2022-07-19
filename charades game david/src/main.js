//variables
const main = document.querySelector("main");
const sectionSettings = document.getElementById("setting");
const footer = document.querySelector("footer");
const sectionStarGame = document.getElementById("startGameSection");
const rulesBtn = document.querySelector("#btnRules");
const modalScore = document.getElementById("poopScore");
const modalRules = document.getElementById("poop");
const btnStarGame = document.querySelector(".toStartGame");
let randomWord = document.getElementById('randomWord')
let header = document.getElementById('header')

let btnPoint = [...document.querySelectorAll('.btnPoint')]
let resp;
let numerosqYaSalieron = [];
let yaSalieronTodos = false;

let inputValues = [...document.querySelectorAll("input")];
let newValues = ['0','0']
let segundos;
let firstTeam = true
//funciones


function wordsRandom(archivoJSON) {
  //let archivoJSON = tipo == 1 ? "wordsJS" : "wordsEnglish";
  if (!yaSalieronTodos) {
    fetch("data/"+archivoJSON+".JSON" )
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
            resp = jsonData[archivoJSON + aleatorio];
            numerosqYaSalieron.push(aleatorio);
            document.getElementById('randomWord').innerHTML = resp
            console.log(resp)
          }
        } else {
          console.log("Ya salieron todos los elementos del array");
        }
      });
  } else {
    console.log("Ya salieron todos los elementos del array");
  }
}
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
  let segundos = newValues[3]

  let buttonCorrect = document.getElementById('buttonCorrect')
  let buttonIncorrect = document.getElementById('buttonIncorrect')

  let h2 = document.querySelector('.timeResult')
  const nextWordBtn = document.getElementById('buttonNextWord')
  let randomWord = document.querySelector('#randomWord')

    let time = setInterval(()=>
    {
      
        segundos--;
        temporizador.innerHTML = segundos
        
        btnPoint.forEach(btn =>
          {
            btn.addEventListener("click",()=>
            {
              if(btn.classList.contains('correctBtn'))
              {
                clearInterval(time)
                h2.innerText = "respuesta correcta"
                nextWordBtn.style.display="flex"
                nextWordBtn.style.backgroundColor = "lime"
              }
            })
          })
         if(segundos < 10)
         {
             temporizador.innerText=`0${segundos}`
         }

         if(segundos == 0)
         {
        
             clearInterval(time)
             h2.innerText= "punto incorrecto"
             btnPoint.forEach(btn =>
              {
                  if(btn.classList.contains('correctBtn'))
                  {
                    btn.style.display = "none"
                  }
                  else
                  {
                    btn.style.display = "flex"
                  }
              })
             nextWordBtn.style.display="flex"
             nextWordBtn.style.backgroundColor = "red"
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
let ruido2 = document.querySelector(".sonido2");
let audioEtiqueta2 = document.querySelector("#audio2");
audioEtiqueta2.setAttribute("src", "./src/inicio.wav");
ruido2.addEventListener("click", () => {
  audioEtiqueta2.play();
});


function start(resp)
 {

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
            e.target.setAttribute.name != "starGame"
            ? e.preventDefault()
            : ""; 
            if(btnPoint.length > 0){btnPoint.forEach(btn =>
              {
                btn.addEventListener('click', updateGame(newValues, btn.id) )
              })}
          }
          if (document.querySelector(".words:checked") != null){
            var chkWordsJS = document.querySelector(".words:checked").value
            wordsRandom(chkWordsJS)
          }
    });
});
}
let ruido3 = document.querySelector(".sonido3");
let audioEtiqueta3 = document.querySelector("#audio3");
ruido3.addEventListener("click", () => {
  audioEtiqueta3.setAttribute("src", "src/puntoBien.wav");
  audioEtiqueta3.play();
});
let ruido4 = document.querySelector(".sonido4");
let audioEtiqueta4 = document.querySelector("#audio4");
ruido4.addEventListener("click", () => {
  audioEtiqueta4.setAttribute("src", "./src/puntoMal.wav");
  audioEtiqueta4.play();
});
  const buttonHome = document.querySelector(".buttonHome");
  buttonHome.addEventListener("click", ()=>{
    main.style.display = "flex";
    sectionStarGame.style.display = "none";
    location.reload();
  })
//lOGICA DE LAS PALABRAS
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
function updateGame(newValues, id)
{
  firstTeam = !firstTeam
  console.log(newValues['1'], id)
  header.innerHTML = `<h2>${firstTeam ? newValues[4] : newValues[5]}</h2>`;
}
//eventos

start();
display();
close();
