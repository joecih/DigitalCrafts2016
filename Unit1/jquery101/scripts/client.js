$(document).ready(function() {

    var hideObj = $('#hide-this');

    $('button').click(function() {
        var theTrick = $(this).html();
        theTrick = theTrick.toLowerCase();
        // console.log(theTrick);

        if (theTrick == 'hide') {
            hideObj.hide();
        } else if (theTrick == 'show') {
            hideObj.show();
        } else if (theTrick == 'toggle') {

        }


    });

    var holdValue = hideObj.html();

    hideObj.mouseenter(function() {
        $(this).html('I just changed this with a mousenter!');
    });

    hideObj.mouseout(function() {
        $(this).html(holdValue);
    });


    //start a timer & execute a function every 30 seconds and then reset the timer at the end of 30 seconds.
    // $(this).timer({
    //     duration: '5s',
    //     callback: function() {
    //         // console.log('Timer will reset!');
    //         // $('body').timer('reset');

    //         $('body').css("background-color","yello");
    //         $('body').css("opacity","0.5");
    //     },
    //     repeat: false //repeatedly call the callback
    // });

    // jQuery.fn.timer = function() {
    //         $('body').css("background-color", "yello");
    //         $('body').css("opacity","0.5");
    //     } // timer function end

    // window.setInterval(function() {
    //     $("body").timer();
    // }, 5000);




    // $('.btn').mouseenter(function() {

    //     if ($(this).css("width") === '200px') {
    //         $(this).animate({width: '110px'});
    //         $(this).css("letter-spacing","");
    //     } else {
    //         $(this).animate({width: '200px'});
    //         $(this).css("letter-spacing","10px");
    //     }

    // });

    // $('#hide').click(function() {
    //      hideObj.fadeOut('slow');
    // });

    // $('#show').click(function() {
    //     hideObj.show();
    // });


});