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

var disparar = false;
var cantidadBa = 5;


setInterval(function(){

//obtener cordenadas
var ba1x = document.getElementById("b1").getClientRects().item(0).x;
var ba1y = document.getElementById("b1").getClientRects().item(0).y;
var ba2x = document.getElementById("b2").getClientRects().item(0).x;
var ba2y = document.getElementById("b2").getClientRects().item(0).y;	
var ba3x = document.getElementById("b3").getClientRects().item(0).x;
var ba3y = document.getElementById("b3").getClientRects().item(0).y;
var ba4x = document.getElementById("b4").getClientRects().item(0).x;
var ba4y = document.getElementById("b4").getClientRects().item(0).y;
var ba5x = document.getElementById("b5").getClientRects().item(0).x;
var ba5y = document.getElementById("b5").getClientRects().item(0).y;

		if(disparar){
	    var acx = document.getElementById("antic").getClientRects().item(0).x;
        var acy = document.getElementById("antic").getClientRects().item(0).y; 
		
	//Colapso
		if ((acy< ba2y && acy> ba2y-70) &&( acx> ba2x && acx < ba2x+70)) {
        document.querySelector('#b2').style.zIndex = "-99"
		document.querySelector('#b2').style.position = "relative";
		document.querySelector('#b2').style.top = "-9999";
				
	    puntos = puntos + 500;
		cantidadBa--
		}
		if ((acy< ba1y && acy> ba1y-70 ) &&( acx> ba1x && acx < ba1x+70)) {
        document.querySelector('#b1').style.zIndex = "-99"
		document.querySelector('#b1').style.position = "relative";
		document.querySelector('#b1').style.top = "-9999";	
	    puntos = puntos + 500;
		cantidadBa--
		}
		if ((acy< ba3y  && acy> ba3y-70)&&( acx> ba3x && acx < ba3x+70)) {
        document.querySelector('#b3').style.zIndex = "-99"
		document.querySelector('#b3').style.position = "relative";
		document.querySelector('#b3').style.left = "-9999";		
	    puntos = puntos + 500;
		cantidadBa--
		}
		if ((acy< ba4y && acy> ba4y-70 ) &&( acx> ba4x && acx < ba4x+70)) {
        document.querySelector('#b4').style.zIndex = "-99"
		document.querySelector('#b4').style.position = "relative";
		document.querySelector('#b4').style.top = "-9999";
			cantidadBa--
	    puntos = puntos + 500;	
		}
		if ((acy< ba5y  && acy> ba5y-70) &&( acx> ba5x && acx < ba5x+70)) {
        document.querySelector('#b5').style.zIndex = "-99"
		document.querySelector('#b5').style.position = "relative";
		document.querySelector('#b5').style.top = "-9999";
	    puntos = puntos + 500;
		cantidadBa--
		}
	   //si mueren todos
	if(cantidadBa == 0){
		var modalFin = document.getElementById("modal-finjuego")
		var puntaje = document.getElementById("puntaje")
        puntaje.innerHTML = "<p>"+puntos+"</p>"
		modalFin.style.display = "block";
		document.body.style.backgroundImage = "url(./img/img5.png)"
		var contenedor = document.getElementsByClassName("contenedor");
		contenedor[0].style.display = "none";
	}

	}
	
	
},100)


setTimeout(function() {
		var modalFin = document.getElementById("modal-finjuego")
		var puntaje = document.getElementById("puntaje")
        puntaje.innerHTML = "<p>"+puntos+"</p>"
		modalFin.style.display = "block";
		document.body.style.backgroundImage = "url(./img/img5.png)"
		var contenedor = document.getElementsByClassName("contenedor");
		contenedor[0].style.display = "none";
},60000)
