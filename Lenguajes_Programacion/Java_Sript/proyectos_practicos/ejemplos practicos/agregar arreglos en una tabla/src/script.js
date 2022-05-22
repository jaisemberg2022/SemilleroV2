 // Array
 // Se crea un array
 const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
 //console.log("players"); console.log(players);
 // Se hace una copia en una nueva variable
 const team = players;
 //console.log("team");  console.log(team);
 // Se obtiene una parte del array 
 //const team2 = players.slice(0,2);  
 //const team2 = players.slice(3); 
 //console.log("team2"); console.log(team2);
 // Se crea una nueva array y se concatena otra
 const team3 = ['Axel', 'Samay'].concat(players);
 //console.log("team3"); console.log(team3);	
 const team4 = ['Laia', ...players, 'Noa'];
 //console.log("team4"); console.log(team4);   
 // Se modifica el valor de la posicion 3 del array team
 //team[3] = 'Lux';
 //console.log("team nuevo"); console.log(team);
 // Se agrega un nuevo elemento al array team    
 //team.push('Eider');
 //console.log("team nuevo"); console.log(team);
 // Se elimina un elemento del array team    
 //team.splice(0,1);
 //console.log("team nuevo"); console.log(team);
 // Objects
 // Se crea un object
 const person = {
     name: 'Wes Bos',
     age: 30
 };
 //console.log("person"); console.log(person);	
 // Se hace una copia en una nueva variable
 const captain = person;
 //console.log("captain"); console.log(captain);
 // Se concatenan objetos
 const cap2 = Object.assign({
     city: 'New york'
 }, person, {
     points: 99,
     age: 12
 });
 //console.log("cap2"); console.log(cap2);
 const cap3 = {
     city: 'New york',
     ...person,
     points: 99
 };
 //console.log("cap3"); console.log(cap3);
 // se crea un object con un nivel
 const wes = {
     name: 'Wes',
     age: 30,
     social: {
         twitter: '@wesbos',
         facebook: 'wesbos.developer'
     }
 };
 //console.log("wes"); console.log(wes);

 //Se llaman los datos del object
 //console.log("wes social"); console.log(wes.age);
 //console.log("wes social twitter");console.log(wes.social.twitter);
 // Se agrega un nuevo parametro al object person
 person.number = 99;
 //console.log("person nuevo"); console.log(person);
 // Se elimina un parametro del object person
 //delete person.age;
 //console.log("person nuevo"); console.log(person);
 //Se convierte un objeto en una cadena de formato Json
 const objStringify = JSON.stringify(wes);
 //console.log("objStringify"); console.log(objStringify);
 // se crea una cadena de formato Json
 const json = '{ "fruit": "pineapple", "fingers": 10 }';
 //console.log("json"); console.log(json);

 // Se convierte una cadena de formato Json en un objeto
 const obj = JSON.parse(json);
 //console.log("obj"); console.log(obj);


 function capturar() {
     function Jugador(nombre, puntos) {
         this.nombre = nombre;
         this.puntos = puntos;
     }

     let nombreDigitado = document.getElementById('nombre').value;
     let puntoDigitado = document.getElementById('puntos').value;

     nuevoJugador = new Jugador(nombreDigitado, puntoDigitado);
     agregar();
 }

 let datosJugador = []

 function agregar() {
     datosJugador.push(nuevoJugador);
     document.getElementById('tbody').innerHTML += '<tr><td>' + nuevoJugador.nombre + '</td><td>' + nuevoJugador.puntos + '</td></tr>'
 }



 //  json: propiedad que permite estructurar una serie de datos en formato de texto y se usa para transferir información entre sistemas
 // push: metodo de arreglo que añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

 // splice: permite eliminar un elemento
 // slice: