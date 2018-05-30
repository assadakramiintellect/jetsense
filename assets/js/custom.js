$(document).ready(function () {

    function detectmob() {
        return window.innerWidth <= 1024;
    }

    // Case study area
    var area1 = 0, area2 = 1, area3 = 1, area4 = 1;
    $(".icon-section-area > div").on('click', function () {
        $(".icon-section-area > div").removeClass('custom-style');
        $(".right-side-area").hide();
        $(".right-side-area-"+$(this)[0].dataset.selected).show();
        switch(parseInt($(this)[0].dataset.selected)){
            case 1:
                area1 === 1 ? rightSideArea1() : "";
                $(".icon-section-area > img").css("animation", "down-one 0.5s forwards");
                setTimeout(function () {
                    $(".icon-section-area > img").css("top", "111px");
                    $(".t-shirt").addClass("custom-style");
                },500);
                break;
            case 2:
                area2 === 1 ? rightSideArea2(): "";
                $(".icon-section-area > img").css("animation", "down-two 0.5s forwards");
                setTimeout(function () {
                    $(".icon-section-area > img").css("top", "226px");
                    $(".stadium").addClass("custom-style");
                },500);
                break;
            case 3:
                area3 === 1 ? rightSideArea3(): "";
                $(".icon-section-area > img").css("animation", "down-three 0.5s forwards");
                setTimeout(function () {
                    $(".icon-section-area > img").css("top", "349px");
                    $(".pharma").addClass("custom-style");
                },500);
                break;
            case 4:
                area4 === 1 ? rightSideArea4(): "";
                $(".icon-section-area > img").css("animation", "down-four 0.5s forwards");
                setTimeout(function () {
                    $(".icon-section-area > img").css("top", "469px");
                    $(".hospitality").addClass("custom-style");
                },500);
                break;
            default:
                break;
        }
    });
    var hoveringState = 0;
    $(".menu-opener").on('click', function () {
        $(".main-menu").addClass('slideOutUpMenu');
        hoveringState = 1;
    });
    $(".menu-opener").hover(function () {
        if(hoveringState === 0){
            $(".main-menu").removeClass('slideOutUpMenu');
            $(".main-menu").addClass('slideInDownMenu');
        }
        else{
            hoveringState = 0;
        }
    });
    //Mobile Menu
    $(".mobile-area i").on('click', function () {
        $(".mobile-area ul").toggle("slide");
        $(this).toggleClass("fa-bars");
        $(this).toggleClass("fa-close");
    });
    $(".mobile-area ul li").on('click', function () {
        $(".mobile-area ul").toggle("slide");
        $(".mobile-area i").toggleClass("fa-bars");
        $(".mobile-area i").toggleClass("fa-close");
    });
    var $elem = $(".header-section");
    var flag = 1;
    var screenSize;
    var screenSizeHeight;
    if(detectmob()){
        screenSize = -100000;
        screenSizeHeight = ((60/100) * $elem.height());
    }
    else {
        screenSize = ((90/100) * $elem.width());
        screenSizeHeight = -100000;
    }
    scrollingAnimations();
    $(window).resize(function() {
        if(detectmob()){
            screenSize = -100000;
            screenSizeHeight = ((90/100) * $elem.height());
        }
        else {
            screenSize = ((90/100) * $elem.width());
            screenSizeHeight = -100000;
            $($elem).animate({
                scrollTop: $("#content-area-div-1").offset().top -200+"px"
            },500 ,'easeInOutExpo');
        }
        scrollingAnimations();
    });

    $elem.mousewheel(function(event, delta) {
        event.preventDefault();
        var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
        if(screenSize !== -100000){
            if(!isMacLike){
                this.scrollLeft -= (delta * 50);
            }
            else{
                this.scrollLeft -= delta;
            }
        }
        else{
            this.scrollTop -=   (delta * 50);
        }
    });

    // Top Menu --- Start
    $(".logo-icon").hover(function () {
        $(".logo-icon img.normal").fadeIn();
    }, function () {
        if(($elem.scrollLeft() >= ((80/100) * $elem.width()) || $elem.scrollTop() > ((80/100) * $elem.height())) && scrollLeft !== 0 ){
            $(".logo-icon img.normal").fadeOut();
        }
    });
    $(".logo-icon").on('click', function () {
        if(screenSize !== -100000) {
            $($elem).animate({
                scrollLeft: $("#content-area-div-1").offset().left - 400 + $elem.scrollLeft()
            }, 3000, 'easeInOutExpo');
        }
        else{
            $($elem).animate({
                scrollTop: $("#content-area-div-1").offset().top - 200  + $elem.scrollTop()
            }, 3000, 'easeInOutExpo');
        }
    });
    $(".main-menu ul li a").on("click", function (e) {
        e.preventDefault();
        $($elem).stop().animate({
            scrollLeft: $($(this).attr("href")).offset().left + $elem.scrollLeft() + 40
        },3000 ,'easeInOutExpo');
    });
    $(".mobile-area ul li a").on("click", function (e) {
        e.preventDefault();
        var scrollval = 50;
        switch($(this).attr("href")){
            case "#content-area-div-7":
                scrollval = -300;
                break;
            case "#content-area-div-8":
                scrollval = -500;
                break;
            case "#content-area-div-9":
                scrollval = -850;
                break;
            default:
                scrollval = 50;
                break;

        }
        $($elem).animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollval + $elem.scrollTop()
        },3000 ,'easeInOutExpo',function () {
        });
    });
    $(".icon-container a").on("click", function (e) {
        e.preventDefault();
        $($elem).animate({
            scrollLeft: $($(this).attr("href")).offset().left + $elem.scrollLeft()
        },3000 ,'easeInOutExpo');
    });

    // Top Menu --- End

    var scrollLeft;
    var scrollBottom;
    $elem.on('scroll',function () {
        // Header Animation
        if($(this).scrollLeft() >= ((80/100) * $elem.width()) || $(this).scrollTop() > ((80/100) * $elem.height())){
            $(".main-menu").addClass('slideOutUpMenu');
            $(".logo-icon img.normal").fadeOut();
        }
        else{
            $(".logo-icon img.normal").fadeIn();
            $(".main-menu").removeClass('slideOutUpMenu');
            $(".main-menu").addClass('slideInDownMenu');
        }
        if(detectmob()){
            scrollLeft = 0;
            scrollBottom =$elem.get(0).scrollHeight - $elem.scrollTop() - $elem.height();
        }else{
            scrollLeft =$elem.get(0).scrollWidth - $elem.scrollLeft() - $elem.width();
            scrollBottom = 0;
        }
        if(scrollLeft <= 1 && scrollBottom <= 0){
            $(".logo-icon img.normal").fadeIn();
            $(".main-menu").removeClass('slideOutUpMenu');
            $(".main-menu").addClass('slideInDownMenu');
        }
        scrollingAnimations();
    });
    var val = 1;
    var caseStudies = 0;
    var scrollposition = 1;
    $(".left-nav-arrow-container").hover(function () {
        if(scrollposition !== 1){
            $(".left-nav-arrow").css("animation", "left-arrow-hover 0.5s forwards");
            $(".left-nav-arrow img").css("animation", "left-nav-arrow-img-hover 0.5s forwards");
        }
    }, function () {
        $(".left-nav-arrow").css("animation", "left-arrow-hover-back 0.5s forwards");
        $(".left-nav-arrow img").css("animation", "left-nav-arrow-img 0.5s forwards");
    });
    $(".right-nav-arrow-container").hover(function () {
        if(scrollLeft > 500){
            $(".right-nav-arrow").css("animation", "left-arrow-hover 0.5s forwards");
        }
    }, function () {
        $(".right-nav-arrow").css("animation", "right-arrow-hover-back 0.5s forwards");
    });
    var flak = 1;
    function scrollingAnimations() {
        //    Content-area-div-1
        if($elem.scrollLeft() < 300){
            scrollposition = 1;
        }
        if($elem.scrollLeft() > (screenSize/2) && $elem.scrollTop() > (screenSizeHeight/2) ){
            $(".background-board object").hide();
        }
        else{
            $(".background-board object").show();
        }

        //    Content-area-div-2

        var x = $(".content-area-div-2").position();
        if (x.left <= 100) {
            scrollposition = 2
        }
        else{
            scrollposition = 1;
        }
        x = $(".second-area p").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".second-area p").removeClass("fadeout-animate");
            $(".second-area p").addClass("fadein-animate");
        }
        else {
            $(".second-area p").addClass("fadeout-animate");
            $(".second-area p").removeClass("fadein-animate");
        }

        x = $(".second-area .database-icon").position();
        if ((x.left - screenSize) <= 0) { //|| (x.top - screenSizeHeight) <= 0
            $(".second-area .database-icon").addClass("fadein-animate");
            $(".second-area .database-icon").removeClass("fadeout-animate");
        }
        else {
            $(".second-area .database-icon").removeClass("fadein-animate");
            $(".second-area .database-icon").addClass("fadeout-animate");
        }

        x = $(".third-area .database-icon").position();
        if ((x.left - screenSize) <= 0 ) { // || (x.top - screenSizeHeight) <= 0
            $(".third-area .database-icon").addClass("fadein-animate");
            $(".third-area .database-icon").removeClass("fadeout-animate");
        }
        else {
            $(".third-area .database-icon").removeClass("fadein-animate");
            $(".third-area .database-icon").addClass("fadeout-animate");
        }

        x = $(".fourth-area .database-icon").position();
        if ((x.left - screenSize) <= 0) { //|| (x.top - screenSizeHeight) <= 0
            $(".fourth-area .database-icon").addClass("fadein-animate");
            $(".fourth-area .database-icon").removeClass("fadeout-animate");
        }
        else {
            $(".fourth-area .database-icon").removeClass("fadein-animate");
            $(".fourth-area .database-icon").addClass("fadeout-animate");
        }

        x = $(".fifth-area").position();
        if ((x.left - screenSize) <= 0) { // || (x.top - screenSizeHeight) <= 0
            $(".fifth-area .database-icon").addClass("fadein-animate");
            $(".fifth-area .database-icon").removeClass("fadeout-animate");
        }
        else {
            $(".fifth-area .database-icon").removeClass("fadein-animate");
            $(".fifth-area .database-icon").addClass("fadeout-animate");
        }
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".fifth-area p").addClass("fadein-animate");
            $(".fifth-area p").removeClass("fadeout-animate");
        }
        else {
            $(".fifth-area p").removeClass("fadein-animate");
            $(".fifth-area p").addClass("fadeout-animate");
        }

        //    Content-area-div-3

        x = $(".first-text-area").position();
        if (x.left <= 200){
            scrollposition = 3;
        }
            if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".first-text-area h3").removeClass("fadeout-animate");
            $(".first-text-area h3").addClass("fadein-animate");
        }
        else {
            $(".first-text-area h3").addClass("fadeout-animate");
            $(".first-text-area h3").removeClass("fadein-animate");
        }

        x = $(".div-3-1").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".div-3-1 h3").addClass("fadein-animate");
            $(".div-3-1 p").addClass("fadein");
            $(".div-3-1 h3").removeClass("fadeout-animate");
            $(".div-3-1 p").removeClass("fadeout-animate");
        }
        else {
            $(".div-3-1 h3").removeClass("fadein-animate");
            $(".div-3-1 p").removeClass("fadein");
            $(".div-3-1 h3").addClass("fadeout-animate");
            $(".div-3-1 p").addClass("fadeout-animate");
        }
        if ((x.left - screenSize) <= 0 ) {// || (x.top - screenSizeHeight) <= 0
            $(".div-3-1 img").addClass("slideInDown");
            $(".div-3-1 img").removeClass("slideOutUp");
        }
        else{
            $(".div-3-1 img").removeClass("slideInDown");
            $(".div-3-1 img").addClass("slideOutUp");
        }
        x = $(".div-3-2").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".div-3-2 img").addClass("slideInUp");
            $(".div-3-2 h3").addClass("fadein-animate");
            $(".div-3-2 p").addClass("fadein");
            $(".div-3-2 img").removeClass("slideOutDown");
            $(".div-3-2 h3").removeClass("fadeout-animate");
            $(".div-3-2 p").removeClass("fadeout-animate");
        }
        else {
            $(".div-3-2 img").removeClass("slideInUp");
            $(".div-3-2 h3").removeClass("fadein-animate");
            $(".div-3-2 p").removeClass("fadein");
            $(".div-3-2 img").addClass("slideOutDown");
            $(".div-3-2 h3").addClass("fadeout-animate");
            $(".div-3-2 p").addClass("fadeout-animate");
        }
        x = $(".div-3-3").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".div-3-3 img").addClass("slideInDown");
            $(".div-3-3 h3").addClass("fadein-animate");
            $(".div-3-3 p").addClass("fadein");
            $(".div-3-3 img").removeClass("slideOutUp");
            $(".div-3-3 h3").removeClass("fadeout-animate");
            $(".div-3-3 p").removeClass("fadeout-animate");
        }
        else {
            $(".div-3-3 img").removeClass("slideInDown");
            $(".div-3-3 h3").removeClass("fadein-animate");
            $(".div-3-3 p").removeClass("fadein");
            $(".div-3-3 img").addClass("slideOutUp");
            $(".div-3-3 h3").addClass("fadeout-animate");
            $(".div-3-3 p").addClass("fadeout-animate");
        }
        x = $(".div-3-4").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".div-3-4 img").addClass("slideInUp");
            $(".div-3-4 h3").addClass("fadein-animate");
            $(".div-3-4 p").addClass("fadein");
            $(".div-3-4 img").removeClass("slideOutDown");
            $(".div-3-4 h3").removeClass("fadeout-animate");
            $(".div-3-4 p").removeClass("fadeout");
        }
        else {
            $(".div-3-4 img").removeClass("slideInUp");
            $(".div-3-4 h3").removeClass("fadein-animate");
            $(".div-3-4 p").removeClass("fadein");
            $(".div-3-4 img").addClass("slideOutDown");
            $(".div-3-4 h3").addClass("fadeout-animate");
            $(".div-3-4 p").addClass("fadeout");
        }

        //    Content-area-div-4

        x = $(".cloud-content").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".cloud-content").addClass("fadein-animate");
            $(".cloud-content").removeClass("fadeout-animate");
        }
        else {
            $(".cloud-content").removeClass("fadein-animate");
            $(".cloud-content").addClass("fadeout-animate");
        }
        if ((x.left - (screenSize + 200)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".cloud-inner-content h1").addClass("fadein-animate");
            $(".cloud-inner-content p").addClass("fadein");
            $(".cloud-inner-content h1").removeClass("fadeout-animate");
            $(".cloud-inner-content p").removeClass("fadeout-animate");
        }
        else {
            $(".cloud-inner-content h1").addClass("fadeout-animate");
            $(".cloud-inner-content p").addClass("fadeout-animate");
            $(".cloud-inner-content h1").removeClass("fadein-animate");
            $(".cloud-inner-content p").removeClass("fadein");
        }
        if ((x.left - (screenSize + 200)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".robot-cloud > div.robot img.robotmain").addClass("animaterobot");
            $(".robot-cloud > div.robot img.robotcloud").addClass("animatecloud");
            $(".robot-cloud > div.robot img.robotmain").removeClass('fadeout-robot');
            $(".robot-cloud > div.robot img.robotcloud").removeClass('fadeout-animate');
        }
        else{
            $(".robot-cloud > div.robot img.robotmain").removeClass("animaterobot");
            $(".robot-cloud > div.robot img.robotcloud").removeClass("animatecloud");
            $(".robot-cloud > div.robot img.robotmain").addClass('fadeout-robot');
            $(".robot-cloud > div.robot img.robotcloud").addClass('fadeout-animate');
        }
        x = $(".content-area-div-4 .container").position();
        if (x.left <= 200) {
            scrollposition = 4;
        }

        //    Content-area-div-5

        x = $(".object-div object").position();
        if ((x.left - screenSize) <= 0 ) { //|| (x.top - screenSizeHeight) <= 0
            $(".first-sec img.shadow").addClass("fadeInRight");
            $(".first-sec img.shadow").removeClass("fadeOutRight");
            $(".object-div object").addClass("fadeInRight");
            $(".object-div object").removeClass("fadeOutRight");
        }
        else {
            $(".first-sec img.shadow").removeClass("fadeInRight");
            $(".first-sec img.shadow").addClass("fadeOutRight");
            $(".object-div object").removeClass("fadeInRight");
            $(".object-div object").addClass("fadeOutRight");
        }
        if (x.left <= 200){
            scrollposition = 5;
        }
        x = $(".second-sec").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".second-sec").addClass("fadein-animate");
            $(".second-sec").removeClass("fadeout-animate");
        }
        else {
            $(".second-sec").removeClass("fadein-animate");
            $(".second-sec").addClass("fadeout-animate");
        }

        x = $(".third-sec").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".third-sec object").fadeIn(2000);
        }
        else {
            $(".third-sec object").fadeOut();
        }

        //    Content-area-div-6

        x = $(".second-6").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".second-6").addClass("fadein-animate");
            $(".second-6").removeClass("fadeout-animate");
        }
        else {
            $(".second-6").removeClass("fadein-animate");
            $(".second-6").addClass("fadeout-animate");
        }
        x = $(".first-6").position();
        if ((x.left - screenSize) <= 0) { // || (x.top - screenSizeHeight) <= 0
            $(".first-6 .hearts-svg-area img:first-child").addClass("slideInLeft");
            $(".first-6 .hearts-svg-area img:nth-child(2)").addClass("slideInLeft");
            $(".first-6 .hearts-svg-area img:nth-child(3)").addClass("slideInLeft");
            $(".first-6 .hearts-svg-area img:nth-child(4)").addClass("fadein");
            $(".first-6 .hearts-svg-area img:nth-child(5)").addClass("fadein");
            $(".first-6 .hearts-svg-area img:nth-child(6)").addClass("fadein");
            $(".first-6 .hearts-svg-area img:nth-child(7)").addClass("fadein");
            $(".first-6 .hearts-svg-area img:nth-child(8)").addClass("fadein");
            $(".first-6 .hearts-svg-area img:first-child").removeClass("slideOutLeft");
            $(".first-6 .hearts-svg-area img:nth-child(2)").removeClass("slideOutLeft");
            $(".first-6 .hearts-svg-area img:nth-child(3)").removeClass("slideOutLeft");
            $(".first-6 .hearts-svg-area img:nth-child(4)").removeClass("fadeout-animate");
            $(".first-6 .hearts-svg-area img:nth-child(5)").removeClass("fadeout-animate");
            $(".first-6 .hearts-svg-area img:nth-child(6)").removeClass("fadeout-animate");
            $(".first-6 .hearts-svg-area img:nth-child(7)").removeClass("fadeout-animate");
            $(".first-6 .hearts-svg-area img:nth-child(8)").removeClass("fadeout-animate");
        }
        else {
            $(".first-6 .hearts-svg-area img:first-child").removeClass("slideInLeft");
            $(".first-6 .hearts-svg-area img:nth-child(2)").removeClass("slideInLeft");
            $(".first-6 .hearts-svg-area img:nth-child(3)").removeClass("slideInLeft");
            $(".first-6 .hearts-svg-area img:nth-child(4)").removeClass("fadein");
            $(".first-6 .hearts-svg-area img:nth-child(5)").removeClass("fadein");
            $(".first-6 .hearts-svg-area img:nth-child(6)").removeClass("fadein");
            $(".first-6 .hearts-svg-area img:nth-child(7)").removeClass("fadein");
            $(".first-6 .hearts-svg-area img:nth-child(8)").removeClass("fadein");
            $(".first-6 .hearts-svg-area img:first-child").addClass("slideOutLeft");
            $(".first-6 .hearts-svg-area img:nth-child(2)").addClass("slideOutLeft");
            $(".first-6 .hearts-svg-area img:nth-child(3)").addClass("slideOutLeft");
            $(".first-6 .hearts-svg-area img:nth-child(4)").addClass("fadeout-animate");
            $(".first-6 .hearts-svg-area img:nth-child(5)").addClass("fadeout-animate");
            $(".first-6 .hearts-svg-area img:nth-child(6)").addClass("fadeout-animate");
            $(".first-6 .hearts-svg-area img:nth-child(7)").addClass("fadeout-animate");
            $(".first-6 .hearts-svg-area img:nth-child(8)").addClass("fadeout-animate");
        }
        if (x.left <= 200){
            scrollposition = 6;
        }
        //    Content-area-div-7

        x = $(".content-area-div-7 .container").position();
        if ((x.left - (screenSize-300)) <= 0 ) {
            scrollposition = 7;
        }

        x = $(".section-text-area").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".section-text-area img").addClass("fadeInLeft");
            $(".section-text-area h1").addClass("fadein-animate");
            $(".section-text-area h2").addClass("fadein-animate");
            $(".section-text-area p").addClass("fadein-animate");
            $(".section-text-area img").removeClass("fadeOutLeft");
            $(".section-text-area h1").removeClass("fadeout-animate");
            $(".section-text-area h2").removeClass("fadeout-animate");
            $(".section-text-area p").removeClass("fadeout-animate");
        }
        else {
            $(".section-text-area img").removeClass("fadeInLeft");
            $(".section-text-area h1").removeClass("fadein-animate");
            $(".section-text-area h2").removeClass("fadein-animate");
            $(".section-text-area p").removeClass("fadein-animate");
            $(".section-text-area img").addClass("fadeOutLeft");
            $(".section-text-area h1").addClass("fadeout-animate");
            $(".section-text-area h2").addClass("fadeout-animate");
            $(".section-text-area p").addClass("fadeout-animate");
        }
        x = $(".section-message-area").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            if(caseStudies === 0){
                rightSideArea1();
                caseStudies = 1;
            }
        }

                //    Content-area-div-8  ---- With Circle Animation

        x = $(".content-area-div-8").position();
        var circle1 = document.querySelector('svg .circle1');
        var circle2 = document.querySelector('svg .circle2');
        var circle3 = document.querySelector('svg .circle3');
        if (x.left <= 200){
            scrollposition = 8;
        }
        if ((x.left - (screenSize-200)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".first-content-area-8 h1").addClass("fadein-animate");
            $(".first-content-area-8 p").addClass("fadein-animate");
            $(".first-content-area-8 h2").addClass("slideInUp");
            $(".first-content-area-8 h1").removeClass("fadeout-animate");
            $(".first-content-area-8 p").removeClass("fadeout-animate");
            $(".first-content-area-8 h2").removeClass("slideOutDown");
        }
        else {
            $(".first-content-area-8 h1").removeClass("fadein-animate");
            $(".first-content-area-8 p").removeClass("fadein-animate");
            $(".first-content-area-8 h2").removeClass("slideInUp");
            $(".first-content-area-8 h1").addClass("fadeout-animate");
            $(".first-content-area-8 p").addClass("fadeout-animate");
            $(".first-content-area-8 h2").addClass("slideOutDown");
        }
        var percentageElement1 = document.querySelector('.percentage__num1');
        var percentageElement2 = document.querySelector('.percentage__num2');
        var percentageElement3 = document.querySelector('.percentage__num3');
        if ((x.left - (screenSize-200)) <= 0 || (x.top - (screenSizeHeight - 500)) <= 0 ) {
            var i = 1,j = 1,k = 1;
            var percentageValue1 = percentageElement1.getAttribute('data-percentage');
            var percentageValue2 = percentageElement2.getAttribute('data-percentage');
            var percentageValue3 = percentageElement3.getAttribute('data-percentage');
            var totalLegth1 = 282.2865905761719 || circle1.getTotalLength();
            var totalLegth2 = 282.2865905761719 || circle2.getTotalLength();
            var totalLegth3 = 282.2865905761719 || circle3.getTotalLength();
            var counter, counter2, counter3;
            circle1.style.strokeDashoffset = totalLegth1 - (totalLegth1 * percentageValue1 / 100);
            circle2.style.strokeDashoffset = totalLegth2 - (totalLegth2 * percentageValue2 / 100);
            circle3.style.strokeDashoffset = totalLegth3 - (totalLegth3 * percentageValue3 / 100);
            if(flag === 1){
                counter = setInterval(function() {
                    (i <= percentageValue1) ? percentageElement1.innerHTML = i++ : clearInterval(counter);
                }, 1000 / percentageValue1);
                counter2 = setInterval(function() {
                    (j <= percentageValue2) ? percentageElement2.innerHTML = j++ : clearInterval(counter2);
                }, 1000 / percentageValue1);
                counter3 = setInterval(function() {
                    (k <= percentageValue3) ? percentageElement3.innerHTML = k++ : clearInterval(counter3);
                }, 1000 / percentageValue1);
                flag = 2;
            }
        }
        else {
            flag = 1;
            circle1.style.strokeDashoffset = 282.2865905761719;
            circle2.style.strokeDashoffset = 282.2865905761719;
            circle3.style.strokeDashoffset = 282.2865905761719;
        }
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".percentage-area p").addClass("fadein");
            $(".percentage-area p").removeClass("fadeout-animate");
        }
        else {
            $(".percentage-area p").removeClass("fadein");
            $(".percentage-area p").addClass("fadeout-animate");
        }
        if ((x.left - (screenSize - 1100)) <= 0 || (x.top - (screenSizeHeight - 700)) <= 0 ) {
            $(".image-group p").addClass("fadein-animate");
            $(".image-group p").removeClass("fadeout-animate");
            $(".image-group object:nth-child(3)").show();
            $(".image-group > img").show();
            if(flak === 1){
                setTimeout(function () {
                    $(".image-group img.signals").css("animation", "signals 0.9s infinite alternate");
                    $(".image-group img.glow").css("animation", "glow 0.9s infinite alternate");
                },1800);
                flak = 2;
            }
            $(".winking-bot").fadeIn();
        }
        else {
            flak = 1;
            $(".image-group p").removeClass("fadein-animate");
            $(".image-group p").addClass("fadeout-animate");
            $(".image-group object:nth-child(3)").hide();
            $(".image-group > img").css("animation", "");
            $(".image-group > img").hide();
            $(".winking-bot").fadeOut();
        }

        //    Content-area-div-9

        x = $(".content-area-div-9").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".content-area-last h1").addClass("fadein-animate");
            $(".content-area-last p").addClass("fadein-animate");
            $(".content-area-last h1").removeClass("fadeout-animate");
            $(".content-area-last p").removeClass("fadeout-animate");
        }
        else {
            $(".content-area-last h1").removeClass("fadein-animate");
            $(".content-area-last p").removeClass("fadein-animate");
            $(".content-area-last h1").addClass("fadeout-animate");
            $(".content-area-last p").addClass("fadeout-animate");
        }
        if (x.left <= 400){
            scrollposition = 9;
        }
        if ((x.left - (screenSize-1000)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".chat-icon").show();
        }
        else{
            $(".chat-icon").delay(1000).hide();
        }
        // console.log(scrollposition);
    }
    function interval(func, wait, times){
        var inter = function(w, t){
            return function(){
                if(typeof t === "undefined" || t-- > 0){
                    setTimeout(inter, w);
                    try{
                        func.call(null);
                    }
                    catch(e){
                        t = 0;
                        throw e.toString();
                    }
                }
            };
        }(wait, times);

        setTimeout(inter, wait);
    }
    var oAddClass = $.fn.addClass;
    $.fn.addClass = function () {
        for (var i in arguments) {
            var arg = arguments[i];
            if ( !! (arg && arg.constructor && arg.call && arg.apply)) {
                arg();
                delete arg;
            }
        }
        return oAddClass.apply(this, arguments);
    }
    function rightSideArea1() {
        $(".right-side-area-1 .section-message-area .img-main2").hide();
        $(".right-side-area-1 .messages-area .message").removeClass("animateMessageRight");
        $(".right-side-area-1 .messages-area .message").removeClass("animateMessageLeft");
        $(".right-side-area-1 .messages-area .message").hide();
        var val = 1;
        area1 = 0;
        interval(function () {
            var $singleMessage = $(".right-side-area-1 .messages-area .message:nth-child("+val+")");
            $(".right-side-area-1 .messages-area .message").removeClass("slideOutUpChat");
            if((val%2) === 0){
                $singleMessage.addClass("animateMessageLeft test1");
            }else{
                $singleMessage.addClass("animateMessageRight test1");
            }
            $(".right-side-area-1 .messages-area .message:nth-child("+(val-1)+")").removeClass("animateMessageLeft");
            $(".right-side-area-1 .messages-area .message:nth-child("+(val-1)+")").removeClass("animateMessageRight");
            if(val > 8){
                val = 1;
                // area1 = 1;
                $(".right-side-area-1 .section-message-area .img-main2").show();
            }
            else{
                if(val > 5){
                    var temp = val - 5;
                    $(".right-side-area-1 .messages-area .message:nth-child("+temp+")").slideUp(function () {
                        $(this).hide();
                    });
                }
                $(".right-side-area-1 .messages-area .message").each(function () {
                    if($(this).hasClass("test1")){
                        if(!detectmob()){
                            $(this).addClass("slideOutUpChat");
                            setTimeout(function () {
                                $singleMessage.css("display","flex");
                                $(".right-side-area-1 .messages-area .message").removeClass("slideOutUpChat");
                            },1000);
                        }
                        else{
                            $singleMessage.css("display","flex");
                        }
                    }
                });
                var oMessage = $singleMessage.find("p").text();
                $singleMessage.find("p").html("...");
                setTimeout(function () {
                    $singleMessage.find("p").html(oMessage);
                },2000);
                val++;
            }
        },3000,9);
    }
    function rightSideArea2() {

        $(".right-side-area-2 .section-message-area .img-main2").hide();
        $(".right-side-area-2 .messages-area .message").removeClass("animateMessageRight");
        $(".right-side-area-2 .messages-area .message").removeClass("animateMessageLeft");
        $(".right-side-area-2 .messages-area .message").hide();
        var val = 1;
        area2 = 0;
        interval(function () {
            var $singleMessage = $(".right-side-area-2 .messages-area .message:nth-child("+val+")");
            $(".right-side-area-1 .messages-area .message").removeClass("slideOutUpChat");
            if((val%2) === 0){
                $singleMessage.addClass("animateMessageLeft test2");
            }else{
                $singleMessage.addClass("animateMessageRight test2");
            }
            $(".right-side-area-2 .messages-area .message:nth-child("+(val-1)+")").removeClass("animateMessageLeft");
            $(".right-side-area-2 .messages-area .message:nth-child("+(val-1)+")").removeClass("animateMessageRight");
            if(val > 7){
                val = 1;
                // area2 = 1;
                $(".right-side-area-2 .section-message-area .img-main2").show();
            }
            else{
                if(val > 5){
                    var temp = val - 5;
                    $(".right-side-area-2 .messages-area .message:nth-child("+temp+")").slideUp(function () {
                        $(this).hide();
                    });
                }
                $(".right-side-area-2 .messages-area .message").each(function () {
                    if($(this).hasClass("test2")){
                        if(!detectmob()){
                            $(this).addClass("slideOutUpChat");
                            setTimeout(function () {
                                $singleMessage.css("display","flex");
                                $(".right-side-area-2 .messages-area .message").removeClass("slideOutUpChat");
                            },1000);
                        }
                        else{
                            $singleMessage.css("display","flex");
                        }
                    }
                });
                var oMessage = $singleMessage.find("p").text();
                $singleMessage.find("p").html("...");
                setTimeout(function () {
                    $singleMessage.find("p").html(oMessage);
                },2000);
                val++;
            }
        },3000,8);
    }
    function rightSideArea3() {
        $(".right-side-area-3 .section-message-area .img-main2").hide();
        $(".right-side-area-3 .messages-area .message").removeClass("animateMessageRight");
        $(".right-side-area-3 .messages-area .message").removeClass("animateMessageLeft");
        $(".right-side-area-3 .messages-area .message").hide();
        var val = 1;
        area3 = 0;
        interval(function () {
            var $singleMessage = $(".right-side-area-3 .messages-area .message:nth-child("+val+")");
            $(".right-side-area-3 .messages-area .message").removeClass("slideOutUpChat");
            if((val%2) === 0){
                $singleMessage.addClass("animateMessageLeft test3");
            }else{
                $singleMessage.addClass("animateMessageRight test3");
            }
            $(".right-side-area-3 .messages-area .message:nth-child("+(val-1)+")").removeClass("animateMessageLeft");
            $(".right-side-area-3 .messages-area .message:nth-child("+(val-1)+")").removeClass("animateMessageRight");
            if(val > 9){
                val = 1;
                // area3 = 1;
                $(".right-side-area-3 .section-message-area .img-main2").show();
            }
            else{
                if(val > 4){
                    var temp = val - 4;
                    $(".right-side-area-3 .messages-area .message:nth-child("+temp+")").slideUp(function () {
                        $(this).hide();
                    });
                }
                $(".right-side-area-3 .messages-area .message").each(function () {
                    if($(this).hasClass("test3")){
                        if(!detectmob()){
                            $(this).addClass("slideOutUpChat");
                            setTimeout(function () {
                                $singleMessage.css("display","flex");
                                $(".right-side-area-3 .messages-area .message").removeClass("slideOutUpChat");
                            },1000);
                        }
                        else{
                            $singleMessage.css("display","flex");
                        }
                    }
                });
                var oMessage = $singleMessage.find("p").text();
                $singleMessage.find("p").html("...");
                setTimeout(function () {
                    $singleMessage.find("p").html(oMessage);
                },2000);
                val++;
            }
        },3000,10);
    }
    function rightSideArea4() {
        $(".right-side-area-4 .section-message-area .img-main2").hide();
        $(".right-side-area-4 .messages-area .message").removeClass("animateMessageRight");
        $(".right-side-area-4 .messages-area .message").removeClass("animateMessageLeft");
        $(".right-side-area-4 .messages-area .message").hide();
        var val = 1;
        area4 = 0;
        interval(function () {
            var $singleMessage = $(".right-side-area-4 .messages-area .message:nth-child("+val+")");
            $(".right-side-area-4 .messages-area .message").removeClass("slideOutUpChat");
            if((val%2) === 0){
                $singleMessage.addClass("animateMessageLeft test4");
            }else{
                $singleMessage.addClass("animateMessageRight test4");
            }
            $(".right-side-area-4 .messages-area .message:nth-child("+(val-1)+")").removeClass("animateMessageLeft");
            $(".right-side-area-4 .messages-area .message:nth-child("+(val-1)+")").removeClass("animateMessageRight");
            if(val > 11){
                val = 1;
                // area4 = 1;
                $(".right-side-area-4 .section-message-area .img-main2").show();
            }
            else{
                if(val > 5){
                    var temp = val - 5;
                    $(".right-side-area-4 .messages-area .message:nth-child("+temp+")").slideUp(function () {
                        $(this).hide();
                    });
                }
                $(".right-side-area-4 .messages-area .message").each(function () {
                    if($(this).hasClass("test4")){
                        if(!detectmob()){
                            $(this).addClass("slideOutUpChat");
                            setTimeout(function () {
                                $singleMessage.css("display","flex");
                                $(".right-side-area-4 .messages-area .message").removeClass("slideOutUpChat");
                            },1000);
                        }
                        else{
                            $singleMessage.css("display","flex");
                        }
                    }
                });
                var oMessage = $singleMessage.find("p").text();
                $singleMessage.find("p").html("...");
                setTimeout(function () {
                    $singleMessage.find("p").html(oMessage);
                },2000);
                val++;
            }
        },4000,12);
    }
    $(".right-side-area-1 .section-message-area .img-main2").on('click',function () {
        rightSideArea1();
    });
    $(".right-side-area-2 .section-message-area .img-main2").on('click',function () {
        rightSideArea2();
    });
    $(".right-side-area-3 .section-message-area .img-main2").on('click',function () {
        rightSideArea3();
    });
    $(".right-side-area-4 .section-message-area .img-main2").on('click',function () {
        rightSideArea4();
    });
    $(".button-area a").on('click', function (e) {
        e.preventDefault();
        if(detectmob()){
            $($elem).animate({
                scrollTop: $("#content-area-div-2").offset().top + $elem.scrollTop()
            },2000 ,'easeInOutExpo');
        }
        else{
            $($elem).animate({
                scrollLeft: $("#content-area-div-2").offset().left + $elem.scrollLeft()
            },2000 ,'easeInOutExpo');
        }
    });
    $(".content-area-div-2 .container .mobile-area p").on('click', function (e) {
        e.preventDefault();
        $($elem).animate({
            scrollTop: $("#content-area-div-3").offset().top + $elem.scrollTop()
        },2000 ,'easeInOutExpo');
    });
    $(".fifth-area p").on('click', function (e) {
        e.preventDefault();
        $($elem).animate({
            scrollLeft: $("#content-area-div-3").offset().left + $elem.scrollLeft()
        },2000 ,'easeInOutExpo');
    });
    $(".section-text-area h2").on('click', function (e) {
        e.preventDefault();
        $($elem).animate({
            scrollLeft: $("#content-area-div-8").offset().left + $elem.scrollLeft()
        },2000 ,'easeInOutExpo');
    });
    $(".cloud-content h2").on('click', function (e) {
        e.preventDefault();
        if(detectmob()){
            $($elem).animate({
                scrollTop: $("#content-area-div-5").offset().top + $elem.scrollTop()
            },2000 ,'easeInOutExpo');
        }
    });
    $(".second-6 p.last-p").on('click', function (e) {
        e.preventDefault();
        $($elem).animate({
            scrollTop: $("#content-area-div-7").offset().top + $elem.scrollTop()
        },2000 ,'easeInOutExpo');
    });
    $(".third-6 p").on('click', function (e) {
        e.preventDefault();
        $($elem).animate({
            scrollLeft: $("#content-area-div-7").offset().left + $elem.scrollLeft()
        },2000 ,'easeInOutExpo');
    });
    $(".section-message-area p.results").on('click', function (e) {
        e.preventDefault();
        $($elem).animate({
            scrollTop: $("#content-area-div-8").offset().top + $elem.scrollTop() + 100
        },2000 ,'easeInOutExpo');
    });
    $(".cloud-content h2").on('click', function (e) {
        e.preventDefault();
        $($elem).animate({
            scrollLeft: $("#content-area-div-5").offset().left + $elem.scrollLeft()
        },2000 ,'easeInOutExpo');
    });

    $(".database-icon").hover(function () {
        $(this).addClass('hover');
    },function () {
        $(this).removeClass('hover');
    });
    $(".vertical.database-icon").hover(function () {
        $(this).find('.flipper').css('transform','rotateX(-180deg)');
    },function () {
        var that = this;
        setTimeout(function () {
            $(that).find('.flipper').css('transform','rotateX(0)');
        }, 5000)
    });

    $(".image-group p").on('click', function (e) {
        e.preventDefault();
        if(detectmob()){
            $($elem).animate({
                scrollTop: $("#content-area-div-9").offset().top + $elem.scrollTop()
            },2000 ,'easeInOutExpo');
        }
        else{
            $($elem).animate({
                scrollLeft: $("#content-area-div-9").offset().left + $elem.scrollLeft()
            },2000 ,'easeInOutExpo');
        }
    });
    $('.left-nav-arrow-container').on('click', function (e) {
        e.preventDefault();
        leftarrowpress();
    });
    $('.right-nav-arrow-container').on('click', function (e) {
        e.preventDefault();
        rightarrowpress();
    });
    function leftarrowpress() {
        var divToGo;
        switch(scrollposition){
            case 1:
            case 2:
                divToGo = $("#content-area-div-1").offset().left - 400 + $elem.scrollLeft();
                break;
            case 3:
                divToGo = $("#content-area-div-2").offset().left + $elem.scrollLeft();
                break;
            case 4:
                divToGo = $("#content-area-div-3").offset().left + $elem.scrollLeft();
                break;
            case 5:
                divToGo = $("#content-area-div-4").offset().left + $elem.scrollLeft();
                break;
            case 6:
                divToGo = $("#content-area-div-5").offset().left + $elem.scrollLeft();
                break;
            case 7:
                divToGo = $("#content-area-div-6").offset().left + $elem.scrollLeft();
                break;
            case 8:
                divToGo = $("#content-area-div-7").offset().left + $elem.scrollLeft();
                break;
            case 9:
                divToGo = $("#content-area-div-8").offset().left + $elem.scrollLeft();
                break;
            default:
                break;
        }
        $($elem).stop().animate({
            scrollLeft: divToGo
        },2000 ,'easeInOutExpo');
    }
    function rightarrowpress() {
        var divToGo;
        switch(scrollposition){
            case 1:
                divToGo = $("#content-area-div-2").offset().left + $elem.scrollLeft();
                break;
            case 2:
                divToGo = $("#content-area-div-3").offset().left + $elem.scrollLeft();
                break;
            case 3:
                divToGo = $("#content-area-div-4").offset().left + $elem.scrollLeft();
                break;
            case 4:
                divToGo = $("#content-area-div-5").offset().left + $elem.scrollLeft()+100;
                break;
            case 5:
                divToGo = $("#content-area-div-6").offset().left + $elem.scrollLeft();
                break;
            case 6:
                divToGo = $("#content-area-div-7").offset().left + $elem.scrollLeft();
                break;
            case 7:
                divToGo = $("#content-area-div-8").offset().left + $elem.scrollLeft();
                break;
            case 8:
                divToGo = $("#content-area-div-9").offset().left + $elem.scrollLeft();
                break;
            default:
                break;
        }
        $($elem).stop().animate({
            scrollLeft: divToGo
        },2000 ,'easeInOutExpo');
    }
    var flipper = 0;
    $(".vertical.database-icon .flipper").on('click', function () {
        if(detectmob()){
            if(flipper === 0){
                $(this).css("transform","rotateX(-180deg)");
                flipper = 1;
            }
            else{
                $(this).css("transform","rotateX(0deg)");
                flipper = 0;
            }
        }
    })
    $(function(){
        $('html').keydown(function(e){
            switch (e.keyCode){
                case 39:
                    rightarrowpress();
                    break;
                case 37:
                    leftarrowpress();
                    break;
                default:
                    break;
            }

        });
    });

});