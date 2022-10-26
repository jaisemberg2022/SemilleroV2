//variables
const hero = document.querySelector('.hero');
const h1 = document.querySelector('h1');
const walk = 500;
//funciones
function shadow(e)
{

   const {offsetWidth: width , offsetHeight:height} = hero;
   let {offsetX:x , offsetY:y} = e;

    // console.log('*',e.target);
    // console.log('-',this);
    if(this !== e.target)
    {
        y += e.target.offsetTop;
        x += e.target.offsetLeft;
    }
    const xWalk = (x / width * walk) - (walk/2);
    const yWalk = (y / height * walk) - (walk/2);
    h1.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
                            ${xWalk *-1 }px ${yWalk}px 0 aqua,
                            ${xWalk}px ${yWalk *-1 }px 0 yellow
                            `
}
//eventos
hero.addEventListener('mousemove',shadow)