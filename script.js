izquierda = 0
puntos = 0
function mover(event){

	if (event.key === "ArrowLeft") {
		izquierda -=5
		globulo.style.left = parseInt(izquierda) + izquierda + "px" 
	}
	if (event.key === "ArrowRight") {
		izquierda +=5
		globulo.style.left = parseInt(izquierda) + izquierda + "px" 
	}
	if (event.keyCode == 0 || event.keyCode == 32) {
		var aa = document.querySelector('#_antic')
		aa.removeAttribute('id')
		aa.setAttribute ('id','antic')
		setTimeout( function() {
			var aa = document.querySelector('#antic')
	aa.removeAttribute('id')
	aa.setAttribute ('id','_antic')
		},1000)}
}
document.onkeydown = mover

setInterval(function() {
var acx = document.querySelector('#antic').getClientRects().item(0).x
var acy = document.querySelector('#antic').getClientRects().item(0).y
var ba1x = document.querySelector('#b1').getClientRects().item(0).x
var ba1y = document.querySelector('#b1').getClientRects().item(0).y
var ba2x = document.querySelector('#b2').getClientRects().item(0).x
var ba2y = document.querySelector('#b2').getClientRects().item(0).y
var ba3x = document.querySelector('#b3').getClientRects().item(0).x
var ba3y = document.querySelector('#b3').getClientRects().item(0).y
var ba4x = document.querySelector('#b4').getClientRects().item(0).x
var ba4y = document.querySelector('#b4').getClientRects().item(0).y
var ba5x = document.querySelector('#b5').getClientRects().item(0).x
var ba5y = document.querySelector('#b5').getClientRects().item(0).y

if (((acx - ba1x) <= 45.5)&&((acx - ba1x) >= -40.5) && (acy - ba1y) < 1) {
	document.querySelector('#b1').style.display = "none"
	document.querySelector('#b2').style.display = "none"
	document.querySelector('#b3').style.display = "none"
	document.querySelector('#b4').style.display = "none"
	document.querySelector('#b5').style.display = "none"
	puntos = puntos + 500
	window.location.href = "./final.html"
}
},50)

setInterval(function() {
var acx = document.querySelector('#antic').getClientRects().item(0).x
var acy = document.querySelector('#antic').getClientRects().item(0).y
var ba1x = document.querySelector('#b1').getClientRects().item(0).x
var ba1y = document.querySelector('#b1').getClientRects().item(0).y
var ba2x = document.querySelector('#b2').getClientRects().item(0).x
var ba2y = document.querySelector('#b2').getClientRects().item(0).y
var ba3x = document.querySelector('#b3').getClientRects().item(0).x
var ba3y = document.querySelector('#b3').getClientRects().item(0).y
var ba4x = document.querySelector('#b4').getClientRects().item(0).x
var ba4y = document.querySelector('#b4').getClientRects().item(0).y
var ba5x = document.querySelector('#b5').getClientRects().item(0).x
var ba5y = document.querySelector('#b5').getClientRects().item(0).y


if (((acx - ba2x) <= 45.5)&&((acx - ba2x) >= -40.5) && (acy - ba2y) < 1) {
	document.querySelector('#b2').style.display = "none"
	puntos = puntos + 500
}
},100)


setTimeout(function() {
	var h1= document.createElement('H1')
	h1.innerHTML = "GAME OVER"
	window.location.href = "./final.html"
},60000)