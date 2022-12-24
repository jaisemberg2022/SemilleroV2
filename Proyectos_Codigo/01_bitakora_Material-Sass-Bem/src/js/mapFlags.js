let calendariesSection = document.getElementById('calendariesSection')
function requestArray()
{
  return fetch ("/data/Linea_de_respuesta.json").then((response) => response.json()).then((requestDatas) => 
    {
      return requestDatas;
    });   
}
requestArray().then(function(requestDatas)
{
  let lineaRespuesta = requestDatas;
  determineFlagStyle(lineaRespuesta)
  
  let calendaries = [...document.querySelectorAll('.calendar-container')];
  filterObjectsDetails(lineaRespuesta,calendaries);
  
})
function mapFlags(objeto,className)
{
  //declaracion  de elementos
  let aside = document.createElement('aside');
      aside.classList.add('display-flex', 'align-items__flex-end', 'flex-direction__column')
      

    let up = document.createElement('section');
      up.classList.add('display-flex')
      
        let row_form = document.createElement('div');
        row_form.classList.add('align-items__center','display-flex','justify-content__center')

        let flag_container = document.createElement('div')
      let calendarie = document.createElement('div');
       
      let totalDias = document.createElement('div');
        let dia = document.createElement('p');

    let down = document.createElement('section');
        let item = document.createElement('span');
        let base = document.createElement('div');

        aside.classList.add('Another-calendaries');

        flag_container.classList.add(`flag-form`)
        flag_container.classList.add(`flag-form__${className}`)
        flag_container.innerText = `${objeto.idItem}`;

        up.classList.add('up-container');

        row_form.classList.add('row-form');
        row_form.innerText = `${objeto.totalPorItem.valor.toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
            if(objeto.totalPorItem.valor <0)
            {
                row_form.classList.add('u-negative-text-color'); //clase
            }
         up.appendChild(row_form);
        
        calendarie.classList.add('calendar-container');
        calendarie.classList.add(`${className}`)
        calendarie.classList.add(`${objeto.idItem}`)
        calendarie.setAttribute('id',`${objeto.idItem}-${objeto.evento.guid}`);
        calendarie.classList.add('display-flex','justify-content__center')
        up.appendChild(calendarie);

        totalDias.classList.add('display-flex' ,'justify-content__center', 'total-dias-container');
        dia.classList.add('total-dias-container__total-dias');
        dia.innerText = objeto.dias;
        totalDias.appendChild(dia);
        up.appendChild(totalDias);
       
          down.classList.add('down-container','display-flex','align-self__flex-start');

            item.classList.add('item');
            item.innerText = objeto.item;
                down.appendChild(item)
            if(objeto.observacion !== null)
            {
              base.classList.add('base-formula-matematica');
              base.innerText = objeto.observacion;
              down.appendChild(base);
            }
        aside.appendChild(flag_container)
         aside.appendChild(up);
          aside.appendChild(down);
         calendariesSection.appendChild(aside);
}
function determineFlagStyle(lineaRespuesta)
{
  lineaRespuesta.causacionesPorItems.forEach(obj => 
    {
      let className = FiterCategories(obj); 
      mapFlags(obj,className)
    })
}
function FiterCategories(obj) {
  if (obj.evento.tipoEntidad.id == 1) {
    return obj.evento.tipoEntidad.descripcion;
  }
  else if (obj.agrupacionBitacora.id == 1) {
    return obj.agrupacionBitacora.descripcion;
  }
  else {
    return obj.agrupacionBitacora.descripcion;
  }
}
