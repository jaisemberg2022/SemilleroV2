function filterAnotherCalendaries(lineaRespuesta,calendaries)
{
    calendaries.forEach(element => 
    {
        lineaRespuesta.causacionesPorItems.forEach(obj =>
            {
                if(obj.idItem == element.id )
                {
                    mapDay(element,obj)
                }
            })
    });
}
function mapDay(element,obj)
{

    console.log(element.id,obj.idItem)
    for (let i = 1; i < 32; i++) 
    {
        let day = document.createElement('span')
        day.classList.add('anotherDays')
        element.appendChild(day)
    }
}