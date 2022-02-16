var cajadelboton2 = document.querySelector(".violeta")
 cajadelboton2.addEventListener("click",cocacola) 

function cocacola()
{
 document.body.style.background = "violet"
}
var cajadelboton = document.querySelector(".agotin")
 cajadelboton.addEventListener("click",canbiarcolor) 

function canbiarcolor()
{
 document.body.style.background = "blue"
}



var boton = document.getElementById("axolot")
boton.addEventListener("click",IrAOtraPagina)
function IrAOtraPagina()
{
  window.open("https://youtu.be/WdY6gtUtsUc","_blank")
}
var cuadro = document.getElementById("cuadro")
var papel = cuadro.getContext("2d")
function dibujarlinea(xInicial, yInicial, xFinal, yFinal)
{
  papel.beginPath()
  papel.lineWidth = 10
  papel.moveTo(xInicial, yInicial)
  papel.lineTo(xFinal,   yFinal) 
  papel.stroke()
  
}

document.addEventListener("keydown",dibujarConTeclado)
var teclado = {arriba: 38, abajo: 48, izquierda: 37, derecha: 39}
var x = 95
var y = 270
function dibujarConTeclado(evento)
{
  if (evento.keyCode == 38)
  {
    dibujarlinea(x, y, x, y - 10)
    y -= 10
  }

  if (evento.keyCode == 40)
  {
    dibujarlinea(x, y, x, y + 10)
    y += 10
  }

  if (evento.keyCode == 37)
  {
    dibujarlinea(x, y, x - 10, y)
    x -= 10
  }

  if (evento.keyCode == 39)
  {
    dibujarlinea(x, y, x + 10, y)
    x += 10
  }
}
