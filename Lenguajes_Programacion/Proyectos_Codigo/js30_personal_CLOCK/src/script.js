//variables
let secondHand = document.querySelector('.second-hand');
let minsHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
//funciones


  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(`segundo ${secondsDegrees}`)

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(`minutos ${minsDegrees}`)

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(`hora ${hourDegrees}`)


  }
  setInterval(setDate, 1000);
  setDate();
