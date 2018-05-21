$(document).ready(function(){

    function detectmob() {
        if(window.innerWidth < 992 && window.innerHeight <= 768) {
            return true;
        } else {
            return false;
        }
    }

    var $elem = $(".header-section");
    var flag = 1;
    var screenSize;
    var screenSizeHeight;
    if(detectmob()){
        screenSize = -100000;
        screenSizeHeight = ((90/100) * $elem.height());
    }
    else {
        screenSize = ((90/100) * $elem.width());
        screenSizeHeight = -100000;
    }
    $(window).resize(function() {
        if(detectmob()){
            screenSize = -100000;
            screenSizeHeight = ((90/100) * $elem.height());
        }
        else {
            screenSize = ((90/100) * $elem.width());
            screenSizeHeight = -100000;
        }
    });

    $elem.on('scroll',function () {
        var x = $(".first-text-area").position();
        if ((x.left - screenSize) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector-31").addClass("connector-3-1");
            $(".connector-32").addClass("connector-3-2");
            $(".connector-33").addClass("connector-3-3");
        }
        else {
            $(".connector-31").removeClass("connector-3-1");
            $(".connector-32").removeClass("connector-3-2");
            $(".connector-33").removeClass("connector-3-3");
        }
        x = $(".fifth-area").position();
        if ((x.left - (screenSize - 200)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector-21").addClass("connector-2-1");
            $(".connector-22").addClass("connector-2-2");
            $(".connector-23").addClass("connector-2-3");
        }
        else {
            $(".connector-21").removeClass("connector-2-1");
            $(".connector-22").removeClass("connector-2-2");
            $(".connector-23").removeClass("connector-2-3");
        }
        x = $(".div-3-1").position();
        if ((x.left - (screenSize - 200)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector-41").addClass("connector-4-1");
            $(".connector-42").addClass("connector-3-2");
            $(".connector-43").addClass("connector-3-3");
        }
        else {
            $(".connector-41").removeClass("connector-4-1");
            $(".connector-42").removeClass("connector-3-2");
            $(".connector-43").removeClass("connector-3-3");
        }
        x = $(".div-3-2").position();
        if ((x.left - (screenSize - 200)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector-51").addClass("connector-4-1");
            $(".connector-52").addClass("connector-3-2");
            $(".connector-53").addClass("connector-3-3");
        }
        else {
            $(".connector-51").removeClass("connector-4-1");
            $(".connector-52").removeClass("connector-3-2");
            $(".connector-53").removeClass("connector-3-3");
        }
        x = $(".div-3-3").position();
        if ((x.left - (screenSize - 200)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector-61").addClass("connector-6-1");
            $(".connector-62").addClass("connector-3-2");
            $(".connector-63").addClass("connector-3-3");
        }
        else {
            $(".connector-61").removeClass("connector-6-1");
            $(".connector-62").removeClass("connector-3-2");
            $(".connector-63").removeClass("connector-3-3");
        }
        x = $(".div-3-4").position();
        if ((x.left - (screenSize - 200)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector-71").addClass("connector-4-1");
            $(".connector-72").addClass("connector-3-2");
            $(".connector-73").addClass("connector-3-3");
        }
        else {
            $(".connector-71").removeClass("connector-4-1");
            $(".connector-72").removeClass("connector-3-2");
            $(".connector-73").removeClass("connector-3-3");
        }
        x = $(".cloud-content").position();
        if ((x.left - (screenSize - 500)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector81").addClass("connector-8-1");
            $(".connector82").addClass("connector-3-2");
            $(".connector83").addClass("connector-3-3");
        }
        else {
            $(".connector81").removeClass("connector-8-1");
            $(".connector82").removeClass("connector-3-2");
            $(".connector83").removeClass("connector-3-3");
        }
        x = $(".second-sec").position();
        if ((x.left - (screenSize - 300)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector91").addClass("connector-9-1");
            $(".connector92").addClass("connector-3-2");
            $(".connector93").addClass("connector-3-3");
        }
        else {
            $(".connector91").removeClass("connector-9-1");
            $(".connector92").removeClass("connector-3-2");
            $(".connector93").removeClass("connector-3-3");
        }
        x = $(".second-6").position();
        if ((x.left - (screenSize - 500)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector101").addClass("connector-8-1");
            $(".connector102").addClass("connector-3-2");
            $(".connector103").addClass("connector-3-3");
        }
        else {
            $(".connector101").removeClass("connector-8-1");
            $(".connector102").removeClass("connector-3-2");
            $(".connector103").removeClass("connector-3-3");
        }
        x = $(".section-text-area").position();
        if ((x.left - (screenSize - 500)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector111").addClass("connector-11-1");
            $(".connector112").addClass("connector-3-2");
            $(".connector113").addClass("connector-11-2");
        }
        else {
            $(".connector111").removeClass("connector-11-1");
            $(".connector112").removeClass("connector-3-2");
            $(".connector113").removeClass("connector-11-2");
        }
        x = $(".content-area-div-9").position();
        if ((x.left - (screenSize + 500)) <= 0 || (x.top - screenSizeHeight) <= 0 ) {
            $(".connector121").addClass("connector-8-1");
            $(".connector122").addClass("connector-3-2");
            $(".connector123").addClass("connector-3-3");
        }
        else {
            $(".connector121").removeClass("connector-8-1");
            $(".connector122").removeClass("connector-3-2");
            $(".connector123").removeClass("connector-3-3");
        }
    });


});