const pressed =[];  
const secretCode = 'codigo';

window.addEventListener('keyup',(e) => {
    pressed.push(e.key)
    pressed.splice(-secretCode.length -1,pressed.length - secretCode.length);
    console.log(pressed);
    !pressed.join('').includes(secretCode) 
        ?null        
        :(console.log("buenaaaa",cornify_add()))

})