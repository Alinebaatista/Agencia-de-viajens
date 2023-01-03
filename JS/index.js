var Opinion =  document.getElementById("Opinion"); // id ->  È uma chave de comunicação com o js , getElemnte puxa.
function opiniao(){
    var x;
    var nome;

    var nome=prompt("Digite seu Nome"); 
    var x = prompt(")

        alert(" Olá " + nome + " Você deu " + x + " estrelas \n Muito Obrigado!");// mostrar o que o usuario digitou

}


// Tira som do vídeo
var video = document.getElementById("videoGalinha");

function mouseOver(){
    video.play();
}

function onmouseOut(){
    video.pause();
}


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);
