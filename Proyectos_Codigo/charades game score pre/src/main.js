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
let  nextWordBtn = document.getElementById('buttonNextWord')
let btnPoint = [...document.querySelectorAll('.btnPoint')]
let resp;
let numerosqYaSalieron = [];
let yaSalieronTodos ;
let inputValues = [...document.querySelectorAll("input")];
let newValues = ['0','0']
let firstTeam = true

let scoreLeft = [...document.querySelectorAll('.score_groupOne')]
let scoreRight = [...document.querySelectorAll('.score_groupTwo')]
let pointG1 = 0;
let pointG2 = 0;
let incorrect_groupB = document.getElementById('incorrect_groupB')
let incorrect_groupA = document.getElementById('incorrect_groupA')
let pointIncorrectGa = 0;
let pointIncorrectGb = 0;

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
      element.innerHTML = newValues[4];
    }
    if (element.classList.contains("limit_points")) {
      element.innerHTML = `${newValues[6]} points`;
    }
    if (element.classList.contains("SecondGroup")) {
      element.innerHTML = `${newValues[5]}`;
    }
  });
}
function TimerQuestion (newValues)
{
            
  let temporizador = document.getElementById('temporizador')
  let h2 = document.getElementById('timeResult')
  let segundos;
  segundos = newValues[3]
  let time = setInterval(()=>
  {
    
    segundos--;
    temporizador.innerText = `Time: ${segundos}`
    
    btnPoint.forEach(btn =>
      {
        btn.addEventListener("click",()=>
        {
          if(btn.classList.contains('correctBtn'))
          {
            clearInterval(time)
            h2.style.display = "flex"
            h2.innerText = "respuesta correcta"
            nextWordBtn.style.display="flex"
            nextWordBtn.style.backgroundColor = "lime"
            nextWordBtn.style.boxShadow = "1px 1px 10px 2px lime"

          }
        })
      })
      if(segundos < 10)
      {
        temporizador.innerText=`Time:  0${segundos}`
      }
      
      if(segundos == 0)
      {

        clearInterval(time)
        h2.style.display = "flex"
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
          nextWordBtn.style.boxShadow = "1px 1px 10px 2px #f44336"
          ruido4.click()
          if(header.innerText == `${newValues[4]}` && segundos == 0)
          {
            
            pointIncorrectGa++
            incorrect_groupA.innerHTML= pointIncorrectGa
            pointG1--
            scoreLeft.forEach(p =>
              {
                p.innerText = pointG1
              })
           
            }
          else if(header.innerText == `${newValues[5]}` && segundos == 0)
            {
              pointIncorrectGb++
              incorrect_groupB.innerHTML= pointIncorrectGa
              pointG2--
              scoreRight.forEach(p =>
                {
                  p.innerText = pointG2
                })
            };
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
// btnNextSite.forEach(btn => {btn.addEventListener('keyup', validateInput())})
function start(resp)
{
  
  let secondGroup = document.querySelector("#secondGroup");
  let first = document.querySelector("#firstGroup");
  let points_number = document.querySelector("#points_number");
  const btnNextSite = [...document.querySelectorAll(".nextPart")];
  const expReg = {
    teamName: /^[a-zA-ZÀ-ÿ\s]{4,16}$/,
    pointsLimit: /^[0-99]+$/
  };
  function validateInput({ target }) {
    expReg[`${target.name}`].test(target.value)
    ? target.style.border = "2px solid green"
    : target.style.border = "2px solid red";
  }
  btnNextSite.forEach((btn) => {
    btn.addEventListener("click",(e) => {
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
          // const inputs = document.getElementsByTagName("input");
          let arrayInputs = Array.from(inputs);
          arrayInputs.forEach(input=> {
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
            points(newValues)
            nextWordBtn.addEventListener('click', updateGame(newValues) )
            
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
let ruido5 = document.querySelector(".sonido5");
let audioEtiqueta5 = document.querySelector(".audio5");
audioEtiqueta5.setAttribute("src", "./src/cambioPalabra.wav");
ruido5.addEventListener("click", () => {
  audioEtiqueta5.play();
})
const buttonHome = document.querySelector(".buttonHome");
buttonHome.addEventListener("click", () => {
  let opcion = confirm("Desea salir del juego Aceptar/Cancelar")
  if (opcion == true) {
    sectionStarGame.style.display = "none";
    location.reload();
    return true
  }
  else{
    return false
    
  }
});
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
  nextWordBtn.addEventListener('click', change)
  header.innerHTML = `<h1>${newValues[4]}</h1>`;

}
function change()
{
  finishGame(newValues)
  segundos = 0;
  firstTeam = !firstTeam
  let h2 = document.getElementById('timeResult')
  h2.style.display ="none"
  h2.innerText = ""
  TimerQuestion(newValues)
  randomWord.innerText = ""
  if (document.querySelector(".words:checked") != null){
    var chkWordsJS = document.querySelector(".words:checked").value
    wordsRandom(chkWordsJS)
  }
  clearInterval(time)
  nextWordBtn.style.display="none"
  btnPoint.forEach(btn =>
    {
        if(btn.classList.contains('correctBtn'))
        {
          btn.style.display = "flex"
        }
        if(btn.classList.contains('incorrectBtn'))
        {
          btn.style.display = "none"
        }
    })
    header.innerHTML = `<h1>${firstTeam ? newValues[4] : newValues[5]}</h1`;
    
}

function points(newValues)
{

 newValues[0] =  pointG1;
 newValues[1] =  pointG2;
  btnPoint.forEach(btn =>
    {
      btn.addEventListener('click',()=>
      {
        if(header.innerText == `${newValues[4]}` && btn.classList.contains('correctBtn'))
        {
          pointG1++;
          scoreLeft.forEach(p =>
            {
              p.innerText = pointG1
            })
          console.log(` ${newValues[4]} obtuvo un punto , ${pointG1}`)
        }
        else if(header.innerText == `${newValues[5]}`&& btn.classList.contains('correctBtn') )
        {
         pointG2++;
         scoreRight.forEach(p =>
          {
            p.innerText = pointG2
          })
          console.log(` ${newValues[5]} obtuvo un punto , ${pointG2}`)
        }
      })

      })

}

function finishGame(newValues)
{
  let game_container = document.getElementById('game_container')
  let score_view = document.getElementById('score_view')
  if (pointG1 >= newValues[6]) 
  {
    score_view.style.display = "none"
    game_container.innerHTML = `
    <header>
        <h1>${newValues[4]} is the winner ${pointG1} points</h1>
    </header>
    <img src="./images/winner.gif" alt="Img rules" style="width:50%;height: auto; margin: 20px; border: 3px solid goldenrod;">
    <button class="reload">reload game</button>
    `
  }
  else if(pointG2 >= newValues[6])
  { 
    score_view.style.display = "none"
    game_container.innerHTML = 
     `
    <header>
        <h1>${newValues[5]} is the winner with ${pointG2} points</h1>
    </header>
    <img src="./images/winner.gif" alt="Img rules" style="width:50%;height: auto; margin: 20px; border: 3px solid goldenrod;">
    <button class="reload">reload game</button>
    <br>
    `
  } 
}
//eventos
start();
display();
close();
