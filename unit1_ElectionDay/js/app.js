function timeTilDoomsDay() {
    var endTime = new Date(2016, 10, 8, 19, 0, 0, 0);
    var endTimeStamp = Date.parse(endTime);
    var nowTimeStamp = Date.now();

    var timeDifference = endTimeStamp - nowTimeStamp;

    var timeStampInSeconds = timeDifference / 1000;
    var seconds = Math.floor(timeStampInSeconds % 60);
    var minutes = Math.floor((timeStampInSeconds / 60) % 60);
    var hours = Math.floor(timeStampInSeconds / (60 * 60) % 24);
    var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
    var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));

    var timeObject = {
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        timeStampSeconds: timeStampInSeconds
    }

    // console.log(timeDifference);

    return timeObject;
};

function initTimer() {

    var timeObjectReturned = timeTilDoomsDay();

    var _timer = document.getElementById('countdown-wrapper');
    var _weeks = document.getElementById('weeks');
    var _days = document.getElementById('days');
    var _hours = document.getElementById('hours');
    var _minutes = document.getElementById('minutes');
    var _seconds = document.getElementById('seconds');

    console.log(parseInt(timeObjectReturned.timeStampSeconds.toString()));

    var checktime = timeObjectReturned.timeStampSeconds;
    if (checktime <= 0) {
        // do something here, stop all timers
        // change header message
        window.clearInterval(time2);
        window.clearInterval(time1);
        
        _seconds.innerHTML = "" + 0;
        _minutes.innerHTML = "" + 0;
        _hours.innerHTML = "" + 0;
        _days.innerHTML = "" + 0;
        _weeks.innerHTML = "" + 0;
        
        document.getElementById('back-view').style.backgroundImage = "url('images/black-splatter.gif')";
        document.getElementById('overlay').style.backgroundColor = 'darkred';
        var header1 = document.getElementsByTagName("h1");
        header1[0].innerHTML = "THE FAT LADY IS SINGING!";
        header1[0].style.color = 'white';
        
        var header3 = document.getElementsByTagName("h3")
        header3[0].innerHTML = "WE ARE ALL SCREWED NOW!";
        header3[0].style.color = 'white';
        
        var timeWrapper = document.getElementsByClassName("time-wrapper");
        console.log(timeWrapper.length);
        for (var i=0; i < timeWrapper.length; i++) {
            timeWrapper[i].style.backgroundColor = 'black';
        }
        
        
    } else {
        // Add to innerHMTL
        _seconds.innerHTML = timeObjectReturned.seconds.toString();
        _minutes.innerHTML = timeObjectReturned.minutes.toString();
        _hours.innerHTML = timeObjectReturned.hours.toString();
        _days.innerHTML = timeObjectReturned.days.toString();
        _weeks.innerHTML = timeObjectReturned.weeks.toString();
    }


};

function updateTimer() {

};

function cycleBackView() {
    state = (state == true) ? false : true; // Bad Loop - Yikes!!
    var trump = "images/trump.jpg";
    var hillary = "images/clinton.jpg";

    var outImage = (state) ? trump : hillary;

    var changeImage = document.getElementById('back-view');
    changeImage.style.backgroundImage = "url(" + outImage + ")";
}


function stopStartBackView() {
    window.clearInterval(time2);
}

var state = true; // Nasty global


document.getElementById('body').addEventListener("click", function() {
    stopStartBackView();
});


var time1 = window.setInterval(initTimer, 1000);
var time2 = window.setInterval(cycleBackView, 6000);

/* endtime = date counting too
currentime = now
set interval
        check currentime
        + subtract it from endtime
        then update!
        
        
        
        ---------------
*/