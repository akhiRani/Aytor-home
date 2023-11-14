$(document).ready(function(){
    /* Search Section Js Start */
    $("#search_show_btn").on("click", function () {
        $("#search").addClass("show");
    });
    $("#search_close_btn").on("click", function () {
        $("#search").removeClass("show");
    });
    /* //Search Section Js End */

    /* Hero Slider Activation Js Start */
    $(".hero_slider").slick({
        arrows: false,
        fade: true,
        speed: 600,
        dots: true,
        dotsClass: "hero_slider_dots",
    });
   /* //Hero Slider Activation Js End */ 
   /* // Deals Section Js Start*/ 
    $("#deals-timer").countdown("2023/12/10", function (event) {
        var $this = $(this).html(
            event.strftime(
                "" +
                    "<div><h4>%D</h4> <p>days</p></div> " +
                    "<span>:</span>"+
                    "<div><h4>%H</h4> <p>hr</p></div> " +
                    "<span>:</span>"+
                    "<div><h4>%M</h4> <p>min</p></div> " +
                    "<span>:</span>"+
                    "<div><h4>%S</h4> <p>sec</p></div>"
            )
        );
    });
    /* // Deals Section Js End */ 
})