const bands = [
    'The death of captain America', 
    'The Galactus Trilogy',
    'Warrent Ellis',
    'Wolverin Origins', 
    'The Inmmortal Iron Fist', 
    'Punisher', 
    'Avengers', 
    'New Mutants', 
    'Counterparts', 
    'Oh, Daredevil', 
    'A Supreme Power', 
    'An Spiderman', 
    'X-Men Days of Future Past '
];

function quitar(letra)
{
    return letra.replace(/[(the |a|an)]/i,'').trim();
}

const listaOrdenada = bands.sort(function(a,b ){
    if (quitar(a) > quitar(b) ) {
        return
    }
    return -1
})

document.querySelector('#bands').innerHTML = 
listaOrdenada.map(res => `<li>${res}</li>`).join(''); 
console.log(listaOrdenada);
