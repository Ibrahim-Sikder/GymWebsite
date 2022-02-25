let nav = document.querySelector(".nav");
let humber = document.querySelector("header .nav ul li a");
let hamBurger = document.querySelector(".ham-burger");
hamBurger.addEventListener("click", function(){
    nav.classList.toggle("open");
    this.classList.toggle("active");
    humber.classList.remove("open");
})


$(document).ready (function(){
    $(".accordion-container").click(function(){
        $(".accordion-container").children(".body").slideUp();
        $(".accordion-container").removeClass(".active");
        $(".accordion-container").children("head").children("spna").removeClass("fa-down").addClass("fa-angle-up");
        $(this).children(".body").slideDown();
        $(this).addClass("active");
        $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down");

     
    })

    $('.nav ul li a, .go-down').click(function(event){
        if(this.hash !== "" ){
            event.preventDefault();
            var hash=this.hash;
            $('html,body').animate({
                scrollTop:$(hash).offset().top
            },800, function(){
                window.location.hash=hash;
            } );
        }
    })
})