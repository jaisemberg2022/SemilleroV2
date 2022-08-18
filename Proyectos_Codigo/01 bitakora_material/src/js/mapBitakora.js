function filterObjectsDetails(lineaRespuesta,calendaries)
{
    calendaries.forEach(element => 
    {
        lineaRespuesta.causacionesPorItems.forEach(categorias =>
            {
        
                if(categorias.idItem +'-'+categorias.evento.guid == element.id  )
                {                                         
                    details = Object.entries(categorias.detalles)
                    createMonthDays( element,`${element.classList[2]}-${lineaRespuesta.causacionesPorItems.indexOf(categorias)}`,details)               
                }
            })
    });
}
function createMonthDays(element,FirstClass,details)
{
    for (let cont = 1; cont < 32; cont++) 
    {
       let day = document.createElement('p');
       day.classList.add('anotherDays');
       day.classList.add(`${FirstClass}`);
       day.setAttribute('id',`${cont}`);
       element.appendChild(day,details); 
    }
    asingDayStyle(FirstClass,details,element.classList[1])
}
function asingDayStyle(FirstClass,details,elementClass)
{
    let allDays = [...document.querySelectorAll(`.${FirstClass}`)]
    details.forEach(obj => 
        {      
        allDays.forEach(dia => 
            {
                let totalPago = document.createElement('span')   
                totalPago.classList.add('totalPago')
                totalPago.innerText = `(${dia.id}) ${obj[1].dinero.valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}`
                
                if(dia.id  == obj[0] && obj[1].estado.id == 2)
                {
                    dia.classList.add(`${elementClass}-${obj[1].estado.descripcion}`)
                    dia.innerText = '✓'
                    dia.appendChild(totalPago)
                }
                else if(dia.id  == obj[0] && obj[1].estado.id == 1)
                {
                    dia.classList.add(`${elementClass}-${obj[1].estado.descripcion.split("En ")[1]}`)
                    dia.appendChild(totalPago)
                }
                else
                {
                    return
                }
            })            
        })
 
}
