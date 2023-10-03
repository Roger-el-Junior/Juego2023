let bottom = 20
let foco = true

function crearPersonaje() {
  let i = document.getElementById('contenedor')

  let div = document.createElement('div')
  div.setAttribute('id', 'personage')

  i.appendChild(div)
}

function stylePer() {
  let id = document.getElementById("personage")
  id.style.bottom = bottom+"px"
  id.style.left = "20px"

}

function evDeControls() {
  console.log("iniciar eventos")
  let atras = document.getElementById("atras")

}

let widthDeMapa = 500
let posicionPersonaje = 20
let marcapasos = 0

let posicionPersonajeEnMapa = widthDeMapa

function limite() {
  if (posicionPersonaje == 0) {
    posicionPersonaje = 20
    marcapasos = 0
    console.log(posicionPersonaje)
  }
  if (posicionPersonaje == widthDeMapa) {
    //posicionPersonaje=280
    console.log(posicionPersonaje)
  }
}
let move = 5
function atras() {

  posicionPersonaje -= move
  limite()
  //console.log(posicionPersonaje)
  let p = document.getElementById('personage')
  p.style.left = posicionPersonaje+"px"


}



function avansa() {
  posicionPersonaje += move
  limite()
  let p = document.getElementById('personage')
  p.style.left = posicionPersonaje+"px"

  //let box = document.getElementById("contenedor2")
  //scroll(box)

}

let val1;
let val2;

function corre1() {

  function avansa1() {
    posicionPersonaje -= 1
    limite()
    //console.log(posicionPersonaje)
    let p = document.getElementById('personage')
    p.style.left = posicionPersonaje+"px"

  }
  val1 = setInterval(avansa1, 10)

}

function para1() {

  clearInterval(val1)
}

function corre2() {
  function avansa2() {
    posicionPersonaje += 1
    limite()
    let p = document.getElementById('personage')
    p.style.left = posicionPersonaje+"px"

  }
  val2 = setInterval(avansa2, 10)

}

function para2() {
  clearInterval(val2)
}

let alturaDeSalto=50
let v=15
let c;
function saltar() {
  console.log("hola")
  let id = document.getElementById("personage")

  let p1 = bottom
  function saltando() {
    if (p1 == alturaDeSalto) {
      foco = false
      clearInterval(c)
      c = 0
      c=setInterval(abajo, v)
    }
    p1++
    id.style.bottom = p1
  }
  
  if (foco == true) {
    c = setInterval(saltando, v)
  }


  function abajo() {

    p1--
    id.style.bottom = p1
    if (p1 == bottom) {
      clearInterval(c)
      foco=true
    }
    
  }
}


/*
let n = 0
function scroll(box){
  n-=1
  let p = box
  p.style.left=n
  console.log(n)
}

function onLoad(){
    let a = document.getElementById("box")
    let n = 0
    function mv(){
        n-=1
        a.style.marginLeft=n+"px"
        if(n==-280){
            n=0
            console.log(n)
        }
    }
    setInterval(mv, 10)
}
*/