const nombre = 'andres'
const apellido = 'peña'

const nombreCompleto = nombre +""+ apellido

console,console.log(nombreCompleto);

const nombreCompleto_BackTick = `${ nombre} ${ apellido }`
console.log(nombreCompleto_BackTick)
console.log(`resultado = ${1+9}`)
console.log(`resultado = ${getString(9+8)}`)

function getString(n){
    return `Numbre = ${n}`
}
