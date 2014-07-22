// JavaScript Document
$(document).ready(function() {
    
var botones = $('.boton');
var caja =$('.caja');
var animar = function(objeto){
var opacidad = objeto.css('opacity');
opacidad = parseInt(opacidad);
	if(opacidad<1){objeto.stop().animate({'opacity':1});}else{objeto.stop().animate({'opacity':0});}
	};


$('.boton').click(function(event){

var identificador = event.target.id;

var cajaEquivalente;
var comparador;
var isSafari = navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") == -1;

for(i=0; i<botones.length; i++){
cajaEquivalente = caja.eq(i);
comparador = botones[i].attributes[0].nodeValue;
if (navigator.userAgent.toLowerCase().match('chrome') || isSafari){
comparador = botones[i].attributes[1].nodeValue;
}





if(comparador == identificador){
	 
	 animar(cajaEquivalente);
	 cajaEquivalente.addClass("activo");
	 
	 
	 
}else{
	cajaEquivalente.removeClass("activo");
	cajaEquivalente.stop().animate({'opacity':0});
	
	
	}
	
}


});


    $('#card').click(function(){
		
		if($(this).hasClass("flipped")){
		$('#card').removeClass("flipped");
		}else{
			$('#card').addClass("flipped");
			}
		});

/*finaliza iniciador*/
});