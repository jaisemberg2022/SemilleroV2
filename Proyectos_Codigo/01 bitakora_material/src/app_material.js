let calendariesContainer = [...document.querySelectorAll('.center')]

function array()
{
  return fetch ("/data/Línea_de_días.json").then((response) => response.json()).then((dataDays) => 
    {
      return dataDays
    });
 
}
function Filter(array, key, value,) {
  var arrayObjFind = [];
  for (var i = 0; i < array.length; i++) {
      if (array[i][key] != undefined && array[i][key].toString().toUpperCase().trim().indexOf(value.toString().toUpperCase().trim()) >= 0) {
          arrayObjFind.push(array[i]);
      }
  }
  return arrayObjFind;
}
array().then(function(dataDays)
{
  document.getElementsByTagName("body")[0].style.display = ""

  let listaDias = dataDays
  
  lineaDias(listaDias)
})

function lineaDias(listaDias)
{
  let firstCalendar = document.getElementById('firstCalendar')
  listaDias.forEach(day =>
  {
    let span = document.createElement('span')
    if(day.evento == "V" )
    {
      span.classList.add(`${day.evento}`)
      span.innerText =  day.dia
      firstCalendar.appendChild(span)
    }
    else if (day.evento == "D")
    { 
      span.classList.add(`${day.evento}`)
      span.innerText =  day.dia
      firstCalendar.appendChild(span)
    }
    else if(day.evento == "T")
    {
      span.classList.add(`${day.evento}`)
      span.innerText =  day.dia
      firstCalendar.appendChild(span)
      span.style.height = " 3.5vh"
    }
  });
}
