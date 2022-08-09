  let calendariesSection = document.getElementById('calendariesSection')
function requestArray()
{
  return fetch ("/data/Linea_de_respuesta.json").then((response) => response.json()).then((requestDatas) => 
    {
      return requestDatas
    });   
}
requestArray().then(function(requestDatas)
{
  let lineaRespuesta = requestDatas
  MapFlags(lineaRespuesta)
})

function filter(objeto,className)
{
  //declaracion  de elementos
  let aside = document.createElement('aside')
    let up = document.createElement('span')
      let one = document.createElement('div')
        let idItem = document.createElement('p')
        let row = document.createElement('p')

    let down = document.createElement('span')
      let two = document.createElement('div')
        let item = document.createElement('p')
        let base = document.createElement('p')

  //asignacion y modificacion de elementos
    //aside
      if(objeto.evento.tipoEntidad.descripcion == "Vacaciones")
      {
        aside.classList.add(`${objeto.evento.tipoEntidad.descripcion}`)
      }
      else
      {
        aside.classList.add(`${className}`)
      }
      up.classList.add('up')
        one.classList.add('one')
          idItem.innerText = objeto.idItem
          row.classList.add('row')
            row.innerText = `${objeto.totalPorItem.valor.toLocaleString( {style:"currency", currency:"COP"})}`
            if(objeto.totalPorItem.valor <0)
            {
              row.style.color = "#FF001F"
            }
          one.appendChild(idItem)
          one.appendChild(row)
        up.appendChild(one)

      down.classList.add('down')
        two.classList.add('two')
        down.appendChild(two)
            item.classList.add('item')
            item.innerText = objeto.item
            two.appendChild(item)
            if(objeto.observacion !== null)
            {
              base.classList.add('base')
              base.innerText = objeto.observacion
              two.appendChild(base)
            }
          
              
      aside.appendChild(up)
      aside.appendChild(down)

  calendariesSection.appendChild(aside)
}












function MapFlags(lineaRespuesta)
{
  lineaRespuesta.causacionesPorItems.forEach(obj => 
    {
      let objeto;
      let className
      if(obj.evento.tipoEntidad.descripcion == "Vacaciones")
      {
        objeto = obj;
        filter(objeto)
      }
      else if(obj.agrupacionBitacora.descripcion == "Devengado")
      {
        objeto = obj;
        className = obj.agrupacionBitacora.descripcion 
        filter(objeto,className)
      }
      else if(obj.agrupacionBitacora.descripcion == "Deducido")
      {
        objeto = obj;
        className = obj.agrupacionBitacora.descripcion 
        filter(objeto,className)
      }
    })
}
