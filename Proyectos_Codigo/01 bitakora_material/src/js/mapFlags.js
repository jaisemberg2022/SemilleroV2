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
  
  let calendaries = [...document.querySelectorAll('.calendarie')];
  filterObjectsDetails(lineaRespuesta,calendaries);
  
})
function mapFlags(objeto,className)
{
  //declaracion  de elementos
  let aside = document.createElement('aside');
    let up = document.createElement('span');
      let firstSectionNames = document.createElement('div');
        let idItem = document.createElement('h4');
        let row = document.createElement('p');
      let calendarie = document.createElement('div');
      let totalDias = document.createElement('div');
        let dia = document.createElement('p');

    let down = document.createElement('span');
      let two = document.createElement('div');
        let item = document.createElement('p');
        let base = document.createElement('p');

        aside.classList.add( `${className}` );
      up.classList.add('up');
      firstSectionNames.classList.add('firstSectionNames');
          idItem.innerText = objeto.idItem;
          row.classList.add('row');
            row.innerText = `${objeto.totalPorItem.valor.toLocaleString("en-US", {style:"currency", currency:"COP"})}`;
            if(objeto.totalPorItem.valor <0)
            {
              row.style.color = "#FF001F";
            }
            firstSectionNames.appendChild(idItem);
            firstSectionNames.appendChild(row);
        up.appendChild(firstSectionNames);
        
        calendarie.classList.add('calendarie');
        calendarie.classList.add(`${className}`)
        calendarie.classList.add(`${objeto.idItem}`)
        calendarie.setAttribute('id',`${objeto.idItem}-${objeto.evento.guid}`);
        up.appendChild(calendarie);

        totalDias.classList.add('totalDias');
        dia.classList.add('dia');
        dia.innerText = objeto.dias;
        totalDias.appendChild(dia);
        up.appendChild(totalDias);
       
      down.classList.add('down');
        two.classList.add('two');
        down.appendChild(two);
            item.classList.add('item');
            item.innerText = objeto.item;
            two.appendChild(item);
            if(objeto.observacion !== null)
            {
              base.classList.add('base');
              base.innerText = objeto.observacion;
              two.appendChild(base);
            }
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
