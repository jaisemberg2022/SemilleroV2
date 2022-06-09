//variables
const scoreBoard = document.getElementsByClassName('score');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score;

//funciones
function randomTime(min,max)
{
    return Math.round(Math.random()*(max-min)+min);
}
function randomHole(holes)
{
    const idx = randomTime(0,holes.length-1)
    const hole = holes[idx];
    if (hole === lastHole)
    {
        console.log('son iguales');
        return randomHole(holes);
    }
    lastHole=hole;
    return idx;  
}
function peep()
{
    const time = randomTime(200,1000);
    const hole = randomHole(holes);
    // document.getElementsByClassName(`hole${hole}`).classList.add('up')
    holes[hole].classList.add('up');
    setTimeout(()=>{
        holes[hole].classList.remove('up');
        if (!timeUp)
        {
            peep();
        }
    },time);
}
function startGames()
{
    scoreBoard.textContent=0;  
    timeUp = false;
    score = 0;
    peep()
    setTimeout(()=>{
        timeUp=true;
    },10000);
}
function bonk(e)
{
    if (!e.isTrusted)
    {
        return;
        this.parentNode.classList.remove('up')
    }
    console.log()
}

moles.forEach((mole) => mole.addEventListener('click',bonk))