
document.addEventListener('DOMContentLoaded', function(){
  tierra()
  arbol()
})

function crearObjeto(objeto, t){
  let i=document.getElementById("contenedor")
  
  let img = document.createElement("img")
  img.setAttribute("src", `img/${objeto}.png`)
  img.setAttribute("id", `${objeto}${t}`)
  
  i.appendChild(img)
  console.log("g")
}

let tamañoDeMapa=280



function tierra(){
  for(let i=0;i<=tamañoDeMapa;i+=20){
    crearObjeto("tierra", i)
    let idT = document.getElementById(`tierra${i}`)
    idT.style.left=i+"px"
    idT.style.bottom="0px"
    
  }
}


function arbol(){
  for(let i=0;i<=tamañoDeMapa;i+=50){
    let random = Math.floor(Math.random()*tamañoDeMapa)
    console.log(random)
    crearObjeto("roble", i)
    let idR = document.getElementById(`roble${i}`)
    idR.style.left=random+"px"
    idR.style.bottom="20px"
  }
}
