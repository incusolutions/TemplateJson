$(document).ready(function(){
 setTimeout(function() {

	console.log("aqui");
	casoEspecial = 0;
	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
	casoEspecial = -2;
	}
	
$('.mainMenu li').each(function(i) {
    i++
	$(this).attr('id', 'boton' + i);
	$(this).click(function() {
    $('html, body').animate({
        scrollTop: $('#modulo' + i).offset().top - 110
    }, 1000);

});
});

$('.moduloMid').each(function(i) {
    i++
	$(this).attr('id', 'modulo' + i);
});

	var titulos = $('.titleBg h2');
titulos.each(function(){
	var ancho = $(this).outerWidth();
	ancho +=10;
	
	$(this).parent().css({'background-position': ancho + 'px center'});
	});
	
	var menu = $('.mainMenu');
	var itemsMainMenu = $('.mainMenu li a');
	if(itemsMainMenu.length > 1){
	/*funcion promedio tamaño li para menu*/
	
	var anchoMenu = menu.width();
	
	var anchoItemsSumatoria = 0;
	
	
	 itemsMainMenu.each(function(){
		 
		 anchoItemsSumatoria += $(this).width() ;
		 
		 });
	var anchoSobrante = anchoMenu - anchoItemsSumatoria;
	anchoSobrante = anchoSobrante - (itemsMainMenu.length*2);
	var paddingLi = anchoSobrante / itemsMainMenu.length;
	
	paddingLi = paddingLi/2-1;
	itemsMainMenu.each(function(){ 
	$(this).css({'padding' : '0px ' + paddingLi + 'px'});
	});
	
	}else{
	$('.mainMenu li').css({ 'float' : 'none', 'margin':'0px auto', 'display':'inline-block' });
		}
		
	/*----------*/
	
		var menu = $('.mainMenuSemanas');
	var itemsMainMenu = $('.mainMenuSemanas li a');
	if(itemsMainMenu.length > 1){
	/*funcion promedio tamaño li para menu*/
	
	var anchoMenu = menu.width();
	
	var anchoItemsSumatoria = 0;
	
	
	 itemsMainMenu.each(function(){
		 
		 anchoItemsSumatoria += $(this).width() +2 + casoEspecial /*2 pixeles de stroke*/ ;
		 
		 });
	var anchoSobrante = anchoMenu - anchoItemsSumatoria;
	anchoSobrante = anchoSobrante - (itemsMainMenu.length*2);
	var paddingLi = anchoSobrante / itemsMainMenu.length;
	
	paddingLi = paddingLi/2;
	itemsMainMenu.each(function(){ 
	$(this).css({'padding' : '0px ' + paddingLi + 'px'});
	});
	
	}else{
	$('.mainMenuSemanas li').css({ 'float' : 'none', 'margin':'0px auto', 'display':'inline-block' });
		}

	}, 100);
	
});