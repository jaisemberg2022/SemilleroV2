let calendariesContainer = [...document.querySelectorAll('.center')]


function addDaysCalendar(obj,className)
{
  for (let i = 1; i < 32; i++) 
    {  
      let span = document.createElement('span')
      span.classList.add(`${className}`)
      obj.appendChild(span)
    }
}

function mapCalendaries()
{
  calendariesContainer.forEach(obj =>
    {
    let className
      if(obj.classList.contains('firstCalendar'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }
      else if(obj.classList.contains('salarioBasico'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }
      else if(obj.classList.contains('vacacionesDiasHabiles'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }
      else if(obj.classList.contains('VacacionesDiasFestivos'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }
      else if(obj.classList.contains('SubcidioTransporte'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }
      else if(obj.classList.contains('Salud1'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }  
      else if(obj.classList.contains('Salud2'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }
      else if(obj.classList.contains('Pension1'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }
      else if(obj.classList.contains('Pension2'))
        {
          className = obj.id
          addDaysCalendar(obj,className)
        }         
    })
}
mapCalendaries()
