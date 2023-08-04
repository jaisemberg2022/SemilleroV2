
let modal = document.getElementById("myModal");
let alert = document.getElementsByClassName("alert");
function open_Modal() {
  modal.style.display = "flex";
}
function Close_Modal() {
  modal.style.display = "none";
}
function inicio() {
  document.getElementById("one").style.display = "flex";
  document.getElementById("two").style.display = "none";
}
function abc(type) {
  let random = Math.floor(Math.random() * 3);
  AsignarImagen(type, random);
  ReiniciarJuego();
  Jugar(type, random);
}
function Jugar(type, random) {
  switch (type) {
    case 1:
      DefinirGanadorPapel(random);
      break;
    case 2:
      DefineGanadorTijera(random);
      break;
    case 3:
      DefineGanadorRoca(random);
      break;
    default:
      break;
  }
}
function ReiniciarJuego() {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "flex";
}
function AsignarImagen(type, random) {
  let img_1 = document
    .getElementsByClassName("button_1")[0]
    .getElementsByTagName("img")[0];
  let img_2 = document
    .getElementsByClassName("button_2")[0]
    .getElementsByTagName("img")[0];
  var source_img =
    type == 1
      ? "images/icon-paper.svg"
      : type == 2
      ? "images/icon-scissors.svg"
      : "images/icon-rock.svg";
  img_1.setAttribute("src", source_img);
  var source_img_2 =
    random == 1
      ? "images/icon-paper.svg"
      : random == 2
      ? "images/icon-scissors.svg"
      : "images/icon-rock.svg";
  img_2.setAttribute("src", source_img_2);
}
function MostrarResultado(resultado) {
  document.getElementById("resultado").innerHTML = resultado;
}
function SumarScore() {
  let ValorScore = document.getElementById("score").innerText;
  ValorScore++;
  document.getElementById("score").innerHTML = ValorScore;
}
function RestarScore() {
  let ValorScore = document.getElementById("score").innerText;
  ValorScore--;
  document.getElementById("score").innerHTML = ValorScore;
}
function DefineGanadorTijera(random) {
  if (random == 1) {
    MostrarResultado("you Win");
    document.getElementById("span_button_1").style.backgroundColor = "#e8a91c";
    document.getElementById("span_button_2").style.backgroundColor = "#506cf4";
    SumarScore();
  } else if (random == 2) {
    MostrarResultado("you Draw");
    document.getElementById("span_button_1").style.backgroundColor = "#e8a91c";
    document.getElementById("span_button_2").style.backgroundColor = "#e8a91c";
  } else {
    MostrarResultado("you Lost");
    document.getElementById("span_button_1").style.backgroundColor = "#e8a91c";
    document.getElementById("span_button_2").style.backgroundColor = "de3f5b";
    RestarScore();
  }
}
function DefinirGanadorPapel(random) {
  if (random == 1) {
    MostrarResultado("you Draw");
    document.getElementById("span_button_1").style.backgroundColor = "#506cf4";
    document.getElementById("span_button_2").style.backgroundColor = "#506cf4";
  } else if (random == 2) {
    MostrarResultado("you Lost");
    document.getElementById("span_button_1").style.backgroundColor = "#506cf4";
    document.getElementById("span_button_2").style.backgroundColor = "#e8a91c";
    RestarScore();
  } else {
    MostrarResultado("You Win");
    document.getElementById("span_button_1").style.backgroundColor = "#506cf4";
    document.getElementById("span_button_2").style.backgroundColor = "#de3f5b";
    SumarScore();
  }
}
function DefineGanadorRoca(random) {
  if (random == 1) {
    MostrarResultado("you Lost");
    console.log("lost");
    document.getElementById("span_button_1").style.backgroundColor = "#de3f5b";
    document.getElementById("span_button_2").style.backgroundColor = "#506cf4";
    RestarScore();
  } else if (random == 2) {
    MostrarResultado("You Win");

    document.getElementById("span_button_1").style.backgroundColor = "#de3f5b";
    document.getElementById("span_button_2").style.backgroundColor = "#e8a91c";
    SumarScore();
  } else {
    MostrarResultado("You draw");

    document.getElementById("span_button_1").style.backgroundColor = "#de3f5b";
    document.getElementById("span_button_2").style.backgroundColor = "#de3f5b";
  }
}
