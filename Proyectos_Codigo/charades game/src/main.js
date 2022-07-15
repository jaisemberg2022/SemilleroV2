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
    console.log(newValues);
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

function home(){
  const buttonHome = document.querySelector(".buttonHome");
  buttonHome.addEventListener("click", ()=>{
    main.style.display = "flex";
    sectionStarGame.style.display = "flex";
  })
}
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

