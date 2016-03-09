// Initally

// document.getElementById("app-icons").style.display = "none";

function showGoogleApps() {

    var e = document.getElementById("app-icons");
    
    if (e.style.display == 'block' || e.style.display == '') {
        document.getElementById("app-icons").style.display = "none";
    } else {
        document.getElementById("app-icons").style.display = "block";
    }

}