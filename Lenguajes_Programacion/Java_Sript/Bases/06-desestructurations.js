

const person = {

    name: 'Andres',
    age:32,
    code:1

}

const { name, age, code } = person

console.log( name, age, code )



const ArrayPerson = [{

    name2: 'Andres',
    age2:32,
    code2:1
},
{

    name2: 'James',
    age2:32,
    code2:2,
    city: 'Medellin'

}
]

const { name2, age2, code2, city='I don´t have a city' } = ArrayPerson[0]

console.log( name2, age2, code2, city )


const createPerson = ( person ) =>{
    return {
        name: person.name,
        age:  person.age,
        code: person.code,
        nick: 'No tiene'
    }
}
console.log( createPerson( person ) )

const createPersonMoreEasy = ( { name, age, code } ) =>{
    
    nick = `${ name }  User`

    return {
        name: name,
        age:  age,
        code: code,
        nick: nick
    }
}

const createPersonMoreEasy_Than_MoreEasy = ( { name, age, code } ) =>{

    const nick = `${ name }  User`

    return {
        name,
        age,
        code,
        nick
    }
}

console.log( createPersonMoreEasy_Than_MoreEasy( person ) )

const createPersonMoreEasy_Than_MoreEasy_Reduce = ( { name, age, code } ) =>( { name, age, code } )

console.log( createPersonMoreEasy_Than_MoreEasy_Reduce( person ) )


const characteres = ['Sonic', 'Mario', 'Crash', 12]

const [ s, m, c, n ] = characteres

console.log(s, m )