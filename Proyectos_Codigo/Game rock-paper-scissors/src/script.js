const one = document.getElementById("one");
const two = document.getElementById("two");
const rules = document.getElementById("btn_rules");
const modal = document.getElementById("modal");
const btn_Close = document.getElementById("close_btn");
const mainView = document.querySelector(".container");
const selection = document.querySelector(".selection");
const text_Result = document.getElementById("win");
const reset = document.getElementById("reset");
const player = document.getElementById("player");
const computer = document.getElementById("computer");

let counter = 0;
let lossCounter = 0;

const close_rules = (e) => (modal.style.display = "none");
const display_rules = (e) => (modal.style.display = "flex");


const toggleView = (type, comp) => {
    mainView.classList.toggle("hide") && selection.classList.toggle("show");
    player.src = `images/choice-${type}.svg`;
    computer.src = `images/choice-${comp}.svg`;
};


function star_Game(type) {
    const random = Math.floor(Math.random() * 3) + 1;
    switch (type) {
        case 1:

            if (random == 1) {
                result = "you tie";
                toggleView(type, random, counter, lossCounter);
                one.style.border = "24px solid #5471f4"
                two.style.border = "24px solid #5471f4"


            } else if (random == 2) {
                result = "you win";
                toggleView(type, random, counter, lossCounter);
                counter = counter + 1;
                one.style.border = "24px solid #5471f4"
                two.style.border = "24px solid #dd3654"

            } else {
                result = "you lose";
                toggleView(type, random, counter, lossCounter);
                one.style.border = "24px solid #5471f4"
                two.style.border = "24px solid #eb9f0e"
                counter = counter - 1;
            }
            break;
        case 2:
            if (random == 1) {
                result = "you lose";
                toggleView(type, random, counter, lossCounter);
                one.style.border = "24px solid #dd3654"
                two.style.border = "24px solid #5471f4"

                counter = counter - 1;
            } else if (random == 2) {
                result = "you tie";
                toggleView(type, random, counter, lossCounter);
                one.style.border = "24px solid #dd3654"
                two.style.border = "24px solid #dd3654"
            } else {
                result = "you win";
                toggleView(type, random, counter, lossCounter);
                one.style.border = "24px solid #dd3654"
                two.style.border = "24px solid #eb9f0e"
                counter = counter + 1;
            }
            break;
        case 3:

            if (random == 1) {
                result = "you win";
                toggleView(type, random, counter, lossCounter);
                counter = counter + 1;
                one.style.border = "24px solid #eb9f0e"
                two.style.border = "24px solid #5471f4"
            } else if (random == 2) {
                result = "you lose";
                toggleView(type, random, counter, lossCounter);
                counter = counter - 1;
                one.style.border = "24px solid #eb9f0e"
                two.style.border = "24px solid #dd3654"
            } else {
                result = "you tie";
                toggleView(type, random, counter, lossCounter);
                one.style.border = "24px solid #eb9f0e"
                two.style.border = "24px solid #eb9f0e"
            }
            break;
    }
    update_Score();
    document.getElementById("win").innerText = result;
}
const update_Score = (result) => {
    document.querySelector(".score").innerText = counter;
};

function reset_Game() {
    selection.classList.toggle("show") && selection.classList.toggle("hide");
    mainView.classList.toggle("hide") && mainView.classList.toggle("show");
}