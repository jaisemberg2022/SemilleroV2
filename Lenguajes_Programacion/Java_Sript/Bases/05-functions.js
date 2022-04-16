console.log('Funciones inseguras y seguras')
        const nombre = 'Andres'//tipo de funcion 1 incorrecta
        function saludar( nombre )
        {
            return `Hola ${nombre}`
        }
        console.log(typeof(saludar))
        /* 
        console.log(saludar(nombre))
        saludar = 'nuevo'
        console.log(typeof(saludar))
        */
        console.log(saludar(nombre))//tipo de funcion 2 correcta
        const saludar2 = function()//fomra mas segura de crear funciones porque las cosnstabtes no cambian
        {
            return `Hola ${nombre}`
        }
        console.log(saludar2(nombre))

console.log('Funciones de tipo flecha-funcion landa')

        const saludoTipoflecha = (n) =>
        {
            return `hola ${nombre}`
        }
        console.log(saludoTipoflecha)

        const saludoTipoflechaCorto = (n) => `Hola ${n}`
        console.log(saludoTipoflechaCorto)

        const salaudoTipoFlechaMascorta = v => `Hola${n}`
        console.log(salaudoTipoFlechaMascorta)

        const SaludoTipoFlechaDefecto = (n='Desconocido') => `Hola${n}`
        console.log(SaludoTipoFlechaDefecto)

console.log('funciones flecha - usando funciones')

        const datos = [{id:1, nombre:'andres'},{id:2,nombre:'James'}]
        const existeAndres = datos.some((dato) => {dato.id ===1})
        const existeJames = datos.some((dato) => {dato.id ===2})

        console.log(existeAndres)
        console.log(existeJames)


        //dependiendo de la cantidad de veces que se repito el signo = es un filtro mas restrictivo y complejo


