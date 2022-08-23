<<<<<<< HEAD

let calendariesContainer = [...document.querySelectorAll('.center')];
let calendarOne = document.getElementById('firstCalendar');

function daysArray()
{
  return fetch ("/data/Línea_de_días.json").then((response) => response.json()).then((dataDays) => 
    {
      return dataDays;
    });   
}
daysArray().then(function(dataDays)
{
  let listaDias = dataDays;
  lineaDias(listaDias);
})
function lineaDias(listaDias)
{
  listaDias.forEach(day =>
  {
      let span = document.createElement('span');
      span.classList.add(`${day.evento}`);
      span.innerText =  day.dia;
      calendarOne.appendChild(span);
  });
}

=======

let calendariesContainer = [...document.querySelectorAll('.center')];
let calendarOne = document.getElementById('firstCalendar');

function daysArray()
{
  return fetch ("/data/Línea_de_días.json").then((response) => response.json()).then((dataDays) => 
    {
      return dataDays;
    });   
}
daysArray().then(function(dataDays)
{
  let listaDias = dataDays;
  lineaDias(listaDias);
})
function lineaDias(listaDias)
{
  listaDias.forEach(day =>
  {
      let span = document.createElement('span');
      span.classList.add(`${day.evento}`);
      span.innerText =  day.dia;
      calendarOne.appendChild(span);
  });
}

>>>>>>> 6fa215a4b52bb2e9f718239580c91641fea0f878
