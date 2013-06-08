var gm = require('googlemaps');
var http = require('http');
var csv = require('ya-csv');

var reader = csv.createCsvFileReader('sampleinput.csv');

var revCoder = function(stuff) {

  var coordString = "" + stuff[0] + "," + stuff[1];

  gm.reverseGeocode(coordString, function(err, data){
    
    if (err !== null) {
      console.log(err);
    }
    
    var igra = data.results;
    var result = "";
    

    for (var el = 0; el < igra.length; el++) {

      var target = igra[el];

      if (target.geometry.location_type !== "APPROXIMATE") {      
        result = result + 
          target.geometry.location_type + "," + 
          target.formatted_address;
      }

    } 

    console.log(stuff[0] + "," , stuff[1]+ ",", stuff[2]+ ",", result);

  });

};

reader.addListener('data', revCoder);





/*http.createServer(function (req, res) {
  gm.reverseGeocode('-33.753211,151.08205', function(err, data){
    console.log(err);
    
    var igra = data.results;
    var result = "";
    

    for (var el = 0; el < igra.length; el++) {

      var target = igra[el];

      if (target.geometry.location_type !== "APPROXIMATE") {      
        result = result + 
          target.geometry.location_type + "," + 
          target.formatted_address;
      }

    } 

    res.end(result);

  });


  res.writeHead(200, {'Content-Type': 'text/plain'});

}).listen(1337);

console.log('Server running at http://10.0.0.10:1337/');*/