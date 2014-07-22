$(document).ready(function () {
/*desarrollado por Jaime Enrique Rodríguez Castellanos je34429@gmail.com */ 
 
    var anchoSlider = 0;
    var slide;
    var anchoContenedor;
    var altoContendor;
    var cantidadSlides;
    var vineta;
    var anchoContenedorVinetas;
    var posicion;


    /*creo el array con los li*/
    slide = $('.slide');
    /*le asigno la clase activo al primer slide*/
    slide.eq(0).addClass('activo');
    /*preparo el ancho y el alto del contenedor de acuerdo al tamaño de los slides */

    anchoContenedor = slide.eq(0).width();
    altoContenedor = slide.eq(0).height();
	
	

    $('.contenedorSlideShow').css({
        'width': anchoContenedor,
        'height': altoContenedor,
        'margin': '0px auto'
    });




    /*recorro el array con un loop para calcular el ancho del contenedor padre*/
    for (i = 0; i < slide.length; i++) {

        anchoSlider += slide.eq(i).outerWidth(true);

    }

    /*le imprimo el ancho calculado al contenedor*/
    $('.slideShow').css({
        'width': anchoSlider,
        'height': altoContenedor
    });

    /*finaliza maquetado inicial*/


    /*creación de la lista denavegación*/

    /*calculo cuantos slide hay para crear la lista*/
    cantidadSlides = slide.length;
    for (i = 0; i < slide.length; i++) {
        $('.navegacionSlideShow').append('<div class="vineta"></div>');
    }

    /*organizo la lista de vinetas y el ancho de su contenedor*/
    vineta = $('.vineta');

    /*calculo el ancho de cada vineta y lo sumo por la cantidad de vinetas para saber cuanto mide el contenedor de vinetas*/
    for (i = 0; i < vineta.length; i++) {

        anchoContenedorVinetas += vineta.eq(i).width();

    }
    /*asigno el ancho calculado*/

    $('.navegacionSlideShow').css({
        'width': anchoContenedorVinetas
    });


/*funcion que calcula la posicion del slide comparando los array para verificar que boton fue presionado*/
    vineta.click(function(){
		
		 				
				
                       
							/*calculo del slide activo*/
                        	var cuerpo = $('.slideShow');
                        	var posicionCuerpo = cuerpo.position();
							var vinetaPicada = $(this).index();
							var destino = vinetaPicada;
							var origen = $('.slide').length;
							var actual = $('.slide li.activo').index();
							var posicionVieja=0;
							$(function(){
							
							pasos = destino - origen;
							pasos = Math.abs(pasos);
							
							
							distanciaRecorrido = pasos * anchoContenedor;
							posicion =  distanciaRecorrido - anchoSlider;
							if(posicionVieja != 0){ posicion = posicionVieja - posicion;}
							$('.slideShow').animate({'left': posicion});
							//actualizacion de valores
							posicionVieja = posicion;	
							slide.removeClass('activo');
							slide.eq(vinetaPicada).addClass('activo');
							
							});
							
		
		
		
		/*fin de la función comparadora de arrays*/
		});



/*funcion que calcula la posicion del slide extendiendo un modelo roundto del objeto nativo Math para calcular dependiendo del ancho del contenedor (a partir de su mitad) cuando avanza o se devuelve la ul durante la ejecución de la funcion draggeable por medio de la libreria jquery ui*/
    
/*este escript ha sido enriquecido, pero existe una versión más sencilla en: http://jsfiddle.net/M8ydk/1/*/

$(function () {

        Number.prototype.roundTo = function (nTo) {
            nTo = nTo || 10;
            return Math.round(this * (1 / nTo)) * nTo;
        }



        var min = 0;
        var max = -((cantidadSlides - 1) * anchoContenedor);

        $(".slideShow").width(cantidadSlides * anchoContenedor).draggable({
            axis: 'x',
            drag: function (event, ui) {
                if (ui.position.left > min) ui.position.left = min;
                if (ui.position.left < max) ui.position.left = max;


            },
            stop: function (event, ui) {
                $(this).animate({
                    'left': (ui.position.left).roundTo(anchoContenedor)
                }, {

                    complete: function () {

                        /*calculo del slide activo*/
                        var cuerpo = $('.slideShow');
                        var posicionCuerpo = cuerpo.position();
                        /*un contador para hacer el incremento en el orden adecuado*/
                        var contador = 0;

                        for (i = cantidadSlides; i >= 0; i--) {


                            posicion = (anchoContenedor * i) - anchoSlider;

                            if (posicionCuerpo.left == 0) {
                                slide.eq(0).addClass('activo');
                            }

                            if (posicion == posicionCuerpo.left) {
                                slide.removeClass('activo');
                                slide.eq(contador).addClass('activo');
                            }

                            contador++;

                           
                            /*fin del bucle*/
                        }

                        /*fin de la funcion invocada al completar animacion*/

                    }
					/*fin draggeable*/
                });

            }


        });

    });


    /*fin jquery*/




});

