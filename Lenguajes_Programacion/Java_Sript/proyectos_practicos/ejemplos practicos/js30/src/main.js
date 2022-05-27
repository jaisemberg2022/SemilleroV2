const inputs = document.querySelectorAll(".controls input")
function cambiar()
{
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change',cambiar))

// const  padding = document.querySelector("#spacing");
// padding.addEventListener('change',()=>{

//     document.documentElement.style.setProperty('--spacing',padding.value + 'px')
// })

// const  asp = document.getElementById("blur");
// asp.addEventListener('change',()=>{

//     document.documentElement.style.setProperty('--blur',asp.value + "px")
// })

// const  color = document.querySelector("#base");
// color.addEventListener('change',()=>{

//     document.documentElement.style.setProperty('--base',color.value )
// })
