$(document).ready(function(){
    
    $("#views").load("vistas.html"); 

    var menu_Tipo;
   
    $.getJSON('general.json', function(data) {

       console.log(data);
       //console.log(data.banners.items);

      
       // cambio background general
      $('body').css({
          'backgroundImage' : 'url('+data.grafico.fondo+')'
       });

      // cambio background footer

      $('.footer').css({
          'backgroundImage' : 'url('+data.grafico.footer+')'
       }); 




       // css franja menu background

       $('.menuBox').css({
          'background' : data.grafico.menu
       }); 

       // pinta despues de unos segundos
       
       setTimeout(function() {
        
        // cambios de colores, fuente etc
        $('.typoBox h2').css('color',data.grafico.colores.h2);
        $('.typoBox h3').css('color',data.grafico.colores.h3);
        $('.typoBox h3').css('color',data.grafico.colores.h4);
        $('.typoBox p').css('color',data.grafico.colores.p);


        // css menu

       $('.mainMenu li').css({
            'border-left' : '1px solid ' + data.menu.borde1_link,
            'border-right' :  '1px solid ' + data.menu.borde2_link
        });

        $('.mainMenu li a').css({
            'color' : data.menu.color_link,
            'text-shadow' :  data.menu.shadow_link + ' 0px -1px 0px'
        });

        $(".mainMenu li a").hover(
            function() {
               $(this).css({
                  'color' : data.menu.hover_link,
                  'background' : data.menu.color_bk
               });
            }, 
            function() {
               $(this).css({
                  'color' : data.menu.color_link,
                  'background' : data.grafico.menu

               });
            }
        );
        
        
       }, 10);
       

        // variable tipo de menu scroll o ruta directa
        menu_Tipo = data.menu.tipo;
       
        // imprime los links dependiendo de la pagina
        $.each(data.links.paginas,function(index){
               if(this.id==pagina){
                  $.each(this.links,function(index){
                    if(menu_Tipo=="scroll"){
                        var plantilla = $('#menu2').html();
                        $('.mainMenu').append(Mustache.render(plantilla, this));
                    }
                    else{
                        var plantilla = $('#menu').html();
                        $('.mainMenu').append(Mustache.render(plantilla, this));
                    }
                    console.log(index);
                  });
               }
          
        });

        
        //imprime los baners
        $.each(data.baners.items,function(index){
             if(this.id==pagina){
                var banerp = $('#baner').html();
                $('.bannerBox').html(Mustache.render(banerp, this));
             }
        });

       

        $.each(data.bloques.bloques_pagina,function(index){
            if(this.id==pagina){
              $.each(this.bloque,function(index){
                var contenido = $('#'+this.vista).html();
                $('.typoBox').append(Mustache.render(contenido, this));
                //$('.typoBox').append(Jaml.render('videoview', this));
              });
            }

        });





        //
       
   
    });


});