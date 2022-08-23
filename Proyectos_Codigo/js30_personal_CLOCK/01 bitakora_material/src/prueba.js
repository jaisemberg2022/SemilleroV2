  let flags = [...document.querySelectorAll('.left')]
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
  asp(lineaRespuesta)
})



function asp(lineaRespuesta)
{
  lineaRespuesta.causacionesPorItems.forEach(obj => 
    {
      
      if(obj.agrupacionBitacora.descripcion == "Devengado")
      {
        console.log(obj)
      }

      else if(obj.evento.tipoEntidad.descripcion == "Vacaciones")
      {
        console.log(obj)
      }
      else if(obj.agrupacionBitacora.descripcion == "Deducido")
      {
        console.log(obj)
      }
    })
}






