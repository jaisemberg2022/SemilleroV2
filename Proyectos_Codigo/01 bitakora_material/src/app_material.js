let calendariesContainer = [...document.querySelectorAll('.center')]


function createCalendars(obj,className)
{
  for (let i = 0; i < 32; i++) 
        {  
            let span = document.createElement('span')
            span.classList.add(`${className}`)
            obj.appendChild(span)
        }
}

  calendariesContainer.forEach(obj =>
    {
    let className
      if(obj.classList.contains('firstCalendar'))
        {
          className = obj.id
          createCalendars(obj,className)
        }
      else if(obj.classList.contains('salarioBasico'))
        {
          className = obj.id
          createCalendars(obj,className)
        }
      else if(obj.classList.contains('vacacionesDiasHabiles'))
        {
          className = obj.id
          createCalendars(obj,className)
        }
      else if(obj.classList.contains('VacacionesDiasFestivos'))
        {
          className = obj.id
          createCalendars(obj,className)
        }
      else if(obj.classList.contains('SubcidioTransporte'))
        {
          className = obj.id
          createCalendars(obj,className)
        }
      else if(obj.classList.contains('Salud1'))
        {
          className = obj.id
          createCalendars(obj,className)
        }  
      else if(obj.classList.contains('Salud2'))
        {
          className = obj.id
          createCalendars(obj,className)
        }
      else if(obj.classList.contains('Pension1'))
        {
          className = obj.id
          createCalendars(obj,className)
        }
      else if(obj.classList.contains('Pension2'))
        {
          className = obj.id
          createCalendars(obj,className)
        }         
    })



