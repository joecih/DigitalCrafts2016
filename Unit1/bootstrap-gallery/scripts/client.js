$(document).ready(function() {
    // $("img").click(function() {
    //     $.getJSON('https://pixabay.com/api/?key=1496184-d38dc287ea5160f8806d04508&q=yellow+flowers&image_type=photo&pretty=false',

    //         function(data) {
    //             console.log(data);
    //         });
    // });

    var imageArray = [];

    var API_KEY = '1496184-d38dc287ea5160f8806d04508';
    $.getJSON("https://pixabay.com/api/?key=" + API_KEY + "&q=yellow+flowers&image_type=photo&pretty=true", function(data)
    {

        for (var i=0; i < data.hits.length; i++) {
            //console.log("url: " + data.hits[i].previewURL);
            // imageArray.push("" + data.hits[i].webformatURL);
            if ( i <= 11 ) {
                console.log("img"+(i+1)+ " " + data.hits[i].webformatURL);
                document.getElementById("img" + (i+1)).src = data.hits[i].webformatURL;
            }
        }
        // if (parseInt(data.totalHits) > 0)
        //     $.each(data.hits, function(i, hit) {
        //         console.log(hit.previewWidth);

        //         imageArray.push(hit.previewWidth);
        //     });
        // else {
        //     console.log('No hits');
        // }
        
        
        
        
        //document.getElementById("img"+1).src = "";
     });

});