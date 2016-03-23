$(document).ready(function() {


    var _ticker = "AAN,AAP,AAT,AAV,AB,ABB,ABBV,ABC,ABEV,ABG,ABM,ABR,ABR-A,ABR-B,ABR-C,ABRN,ABT,ABX,AC,ACC,ACCO,ACG,ACH,ACM,ACN,ACP,ACRE,ACV,ACW,ADC,ADM,ADPT,ADS,ADT,ADX";
    var _myTimer;
    var _table;


    $('#ticker-search').submit(function() {

        var _symbolVal = "" + $('#symbol').val();
        _ticker = (_symbolVal != '') ? _symbolVal : _ticker;


        _url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20('" + _ticker + "')%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";

        //clearTimeout(_myTimer);

        _table = $('#data-table').DataTable({
            "ajax": {
                "url": _url, // _url is my own style of local variable naming. your path would go here.
                "dataSrc": "query.results.quote"
            },
            columns: [{
                "data": "Name"
            }, {
                "data": "Symbol"
            }, {
                "data": "Ask"
            }, {
                "data": "Change"
            }, {
                "data": "DaysHigh"
            }],
            "destroy": true
                // 'destroy' is needed to render the table on each input string passed to the table.
        });

        event.preventDefault();

        // Set interval to reload the ajax for _table, this is Sugar on top :)
        window.setInterval(function() {
            _table.ajax.reload(null, false); // user paging is not reset on reload
        }, 2000);
    });





    function updateTable(_loopItems) {
        var _html = '<tr>';
        _html += '<td>' + _loopItems.Name + '</td>';
        _html += '<td>' + _loopItems.Symbol + '</td>';
        _html += '<td>' + _loopItems.Ask + '</td>';
        _html += '<td>' + _loopItems.Change + '</td>';
        _html += '<td>' + _loopItems.DaysHigh + '</td>';
        _html += '</tr>';

        return _html;
    }

    // $('.footable').footable({
    //     breakpoints: {
    //         tiny: 100,
    //         medium: 555,
    //         big: 2048
    //     }
    // });



});

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100)
};

var lineChartData = {
    labels: ["9:00 a.m.", "10:00 a.m.", "11:00 a.m", "12:00 a.m.", "1:00 p.m.", "2:00 p.m.", "3:00 p.m."],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "red",
        pointColor: "blue",
        pointStrokeColor: "green",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "yellow",
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }]
}

window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true,
        scaleGridLineWidth: 1,
        scaleGridLineColor: "lightgray",
        scaleShowGridLines: true,
    });
}