console.log('Asignacion por referencia')
const persona = 
{
    nombre: 'Andres',
    apellido: 'Peña',
    edad:'25',
    ciudad:'Bogota',
    zip:'0117292',
    tipo:'comprador'
}

const Personavendedor = persona
Personavendedor.tipo = 'vendedor'
console.log( persona )
console.log( Personavendedor )

////---------------------------------------------------
console.log('asignacion por valor')


console.log('Asignacion por referencia')
const persona2 = 
{
    nombre: 'Andres',
    apellido: 'Peña',
    edad:'25',
    ciudad:'Bogota',
    zip:'0117292',
    tipo:'comprador'
}
const Personavendedor = {...persona2}//<--- forma de crear una nueva variable y romper una referencia por asignacion
Personavendedor.tipo = 'vendedor'
console.log( persona2 )
console.log( Personavendedor )