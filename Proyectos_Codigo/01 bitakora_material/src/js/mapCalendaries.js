function filterObjectsDetails(lineaRespuesta,calendaries)
{
    calendaries.forEach(element => 
    {
        lineaRespuesta.causacionesPorItems.forEach(categorias =>
            {
                if(categorias.idItem == element.id  )
                {                     
                    details = Object.entries(categorias.detalles)
                    createMonthDays(element,details)               
                }
            })
    });
}
function createMonthDays(element,details)
{
    
    for (let cont = 1; cont < 32; cont++) 
    {
       let day = document.createElement('p');
       day.classList.add('anotherDays');
       day.classList.add(`${element.id}`);
       day.setAttribute('id',`${cont}`);
       element.appendChild(day,details); 
    }
    asingDayStyle(element.id,details,element.classList[1])
}
function asingDayStyle(elementId,details,elementClass)
{
    let allDays = [...document.querySelectorAll(`.${elementId}`)]
    allDays.forEach(dia => 
        {
            details.forEach(obj => 
                {
                    if(dia.id  == obj[0] && obj[1].estado.id == 2)
                    {
                        dia.classList.add(elementClass)
                        dia.innerText = '✓'
                        console.log(elementClass)
                        
                    }
                    else if(dia.id  == obj[0] && obj[1].estado.id == 1)
                    {
                        dia.classList.add(`${elementClass}-${obj[1].estado.id}`)
                        console.log(obj[1].estado.descripcion)
                    }
                    else
                    {
                        return
                    }
                })
               
        })
}
