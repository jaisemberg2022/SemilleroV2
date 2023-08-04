
let calendariesContainer = [...document.querySelectorAll('.center')]
function daysArray()
{
  return fetch ("/data/Línea_de_días.json").then((response) => response.json()).then((dataDays) => 
    {
      return dataDays
    });   
}
daysArray().then(function(dataDays)
{
  let listaDias = dataDays
  MapCalendaries(listaDias) 
 
})

function MapCalendaries(listaDias)
{
  calendariesContainer.forEach(calendar =>
    {
      if(calendar.id == "firstCalendar")
      {
        lineaDias(listaDias,calendar)
      }
    })
}
function lineaDias(listaDias,calendar)
{
  listaDias.forEach(day =>
  {
      let span = document.createElement('span')
      span.classList.add(`${day.evento}`)
      span.innerText =  day.dia
      calendar.appendChild(span)
    
  });
}

