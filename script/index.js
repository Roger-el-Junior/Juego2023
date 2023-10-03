document.addEventListener('DOMContentLoaded', function() {
  tierra()
  troncosDe1P()
  troncosDe2P()
  arbol()
  crearPersonaje()
  stylePer()
  
  
})

function crearObjeto(objeto, t) {
  let i = document.getElementById("contenedor2")

  let img = document.createElement("img")
  img.setAttribute("src", `img/${objeto}.png`)
  img.setAttribute("id", `${objeto}${t}`)


  i.appendChild(img)

}

let tamañoDeMapa =600
let pr1 = tamañoDeMapa/600
let pr2 = tamañoDeMapa/200
let obj3 = tamañoDeMapa/300
let in1 = tamañoDeMapa/100



function tierra() {
  for (let i = 0; i <= tamañoDeMapa; i += 20) {
    crearObjeto("tierra", i)
    let idT = document.getElementById(`tierra${i}`)
    idT.style.left = i+"px"
    idT.style.bottom = "0px"

  }
}

//q gener robles de 2 pisos
let pos=[]
function troncosDe1P() {
  

  let arr =[]


  let i = 0
  while (true) {

    if (i == in1) {
      
      break
    } else {
      
      let random = Math.floor(Math.random()*tamañoDeMapa)
      if ( (random%20 == 0) && (random>50) ) {
        
        if(arr.length==0){
          arr.push(random)
        }else{
           for(let a of arr){
            if(a==random){
            
              continue
              
            }else{
              arr.push(random)

            }
          }
        }

        crearObjeto("roble", i)
        let idR = document.getElementById(`roble${i}`)
        idR.style.left = random+"px"
        idR.style.bottom = "20px"
        i++
        pos.push(random)
        

      }

    }
  }
  

}
  
function troncosDe2P(){
    let p = []
  
  let z =0
  
  let b2 = 0
  let arr2 = []
  console.log(pos)
  while(b2<=50){
    
    if(b2==obj3){
      console.log(arr2)
      break
    }else{
      let random = Math.floor(Math.random()*tamañoDeMapa)
      
      if( (random%20==0) && (random>50) ){
        
        if(arr2.length==0){
          arr2.push(random)
        }else{
          for(let a of arr2){
            if(a===random){
              
              continue
              
            }else{
              
              arr2.push(random)

            }
          }
        }
        z+=5
        crearObjeto("roble3", b2)
        let idR = document.getElementById(`roble3${b2}`)
        idR.style.left = random+"px"
        idR.style.bottom = "20px"
        
        let b3=random-20
        crearObjeto("iny", b2)
        let idR1 = document.getElementById(`iny${b2}`)
        idR1.style.left = b3+"px"
        idR1.style.bottom = "20px"
        
        console.log(z)
        let b4=random+20
        crearObjeto("iny", z)
        let idR2 = document.getElementById(`iny${z}`)
        idR2.style.left = b4+"px"
        idR2.style.bottom = "20px"
        
        b2++
      }
    }
    
  }
  
}

function arbol(){
  
  
  let arr =[]


  let i = 0
  while (true) {

    if (i == pr1) {
      
      break
    } else {
      
      let random = Math.floor(Math.random()*tamañoDeMapa)
      if ( (random%20 == 0) && (random>50) && (random< (tamañoDeMapa-50) ) ) {
        
        if(arr.length==0){
          arr.push(random)
        }else{
           for(let a of arr){
            if(a==random){
            
              continue
              
            }else{
              arr.push(random)

            }
          }
        }

        crearObjeto("arbol", i)
        let idR = document.getElementById(`arbol${i}`)
        idR.style.left = random+"px"
        idR.style.bottom = "20px"
        i++
        //pos.push(random)
        

      }

    }
  }
  
}


/*
let % = tamañoDeMapa*0.20
let R = %- tamañoDeMapa
let f = r
*/