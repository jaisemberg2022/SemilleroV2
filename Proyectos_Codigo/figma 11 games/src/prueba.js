
// const Posibilidades = [  {usuario:1,computador:1,mensaje :"dra",color_usuario:"lime",color_computador:"#506cf4"},
//                         {usuario:"papel",computador:"roca",mensaje :"you win",color_usuario:"#506cf4",color_computador:"#de3f5b"},
//                         {usuario:"papel",computador:"tijeras",mensaje :"you lost",color_usuario:"#506cf4",color_computador:"#e8a91c"},
//                         {usuario:"tijeras",computador:"tijeras",mensaje :"dra",color_usuario:"#e8a91c",color_computador:"#e8a91c"},
//                         {usuario:"tijeras",computador:"papel",mensaje :"you win",color_usuario:"#e8a91c",color_computador:"#506cf4"},
//                         {usuario:"tijeras",computador:"roca",mensaje :"you lost",color_usuario:"#e8a91c",color_computador:"#de3f5b"},
//                         {usuario:"roca",computador:"roca",mensaje :"dra",color_usuario:"#de3f5b",color_computador:"#de3f5b"},
//                         {usuario:"roca",computador:"tijeras",mensaje :"you win",color_usuario:"#de3f5b",color_computador:"#e8a91c"},
//                         {usuario:"roca",computador:"papel",mensaje :"you lost",color_usuario:"#de3f5b",color_computador:"#506cf4"},

//                     ]

// function ObtenerResultadoGanador(SeleccionUsuario, SeleccionComputador)
// {
//     for (let index = 0; index < Posibilidades.length; index++)
//          {
//              if (Posibilidades[index].usuario === SeleccionUsuario && Posibilidades[index].computador === SeleccionComputador )
//             {
//                  return Posibilidades[index]
//             }

//         };
// }

// function abc2()
// {
//     var resultado = ObtenerResultadoGanador(1,1)
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;

//     var resultado = ObtenerResultadoGanador("papel","roca")
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;

//     var resultado = ObtenerResultadoGanador("papel","tijeras")
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;

//     var resultado = ObtenerResultadoGanador("tijeras","tijeras")
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;

//     var resultado = ObtenerResultadoGanador("tijeras","papel")
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;

//     var resultado = ObtenerResultadoGanador("tijeras","roca")
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;

//     var resultado = ObtenerResultadoGanador("roca","roca")
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;

//     var resultado = ObtenerResultadoGanador("roca","tijeras")
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;

//     var resultado = ObtenerResultadoGanador("roca","papel")
//     MostrarResultado(resultado.mensaje);
//     document.getElementById("span_button_1").style.backgroundColor = resultado.color_usuario;
//     document.getElementById("span_button_2").style.backgroundColor = resultado.color_computador;
// }
