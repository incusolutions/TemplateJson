$(document).ready(function(){
    
 
      Jaml.register('menu', function(data) {
        li(
            a({href: data.url }, data.titulo)
        )
      });

      Jaml.register('menu2', function(data) {
        li(
            a({href: '#' }, data.titulo)
        )
      });

      Jaml.register('baner', function(data) {
        img({src: data })
       
      });

      Jaml.register('titulo', function(data) {
        div({cls: 'titleHolder'},
          div({cls: 'titleBg'},
            h2(data)
          )
        )
      });

      Jaml.register('componentevideo', function(data) {
        div({cls:'videoBg'},
          div({cls:'videoWrapper'},
            video({ width:data.width, height:data.height, id:data.id },
               source({src:data.sourcemp4, type: 'video/mp4'}),
               source({src:data.sourceogv, type: 'video/ogv'}),
               source({src:data.sourcewebm, type: 'video/webm'})
            )
          )
        )
      });


     Jaml.register('videoview', function(data) {
        div({cls:'moduloMid'},
          Jaml.render('titulo', data.titulo)
        ),
        div({cls:'cajaModulo'},
          Jaml.render('componentevideo', data.contenido)
        )
     });






    var menu_Tipo;
   

    $.getJSON('general.json', function(data) {

       console.log(data);
       //console.log(data.banners.items);

       $('body').css({
          'backgroundImage' : 'url('+data.grafico.fondo+')'
       });

       // css franja menu background

       $('.menuBox').css({
          'background' : data.grafico.menu
       }); 

       // css menu
       setTimeout(function() {
        

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
                       $('.mainMenu').append(Jaml.render('menu2', this));
                    }
                    else{
                       $('.mainMenu').append(Jaml.render('menu', this));
                    }
                    console.log(index);
                  });
               }
          
        });

        
        //imprime los baners
        $.each(data.baners.items,function(index){
             if(this.id==pagina){
                $('.bannerBox').html(Jaml.render('baner', this.ruta));

             }
        });

        $.each(data.bloques.bloques_pagina,function(index){
            if(this.id==pagina){
              $.each(this.bloque,function(index){
                $('.typoBox').append(Jaml.render('videoview', this));
              });
            }

        });


        //
       
   
    });


});