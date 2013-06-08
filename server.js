var gm = require('googlemaps');
var http = require('http');
var util = require('util');

http.createServer(function (req, res) {
  gm.reverseGeocode('-33.753211,151.08205', function(err, data){
    console.log(err);
    console.log(data);

    var igra = data.results;

    for (var el = 0; el < igra.length; el++) {
      
      var target = igra[el];

      console.log(target.geometry.location_type);
      console.log(target.formatted_address);
      console.log();
    } 

    res.end();
  });


  res.writeHead(200, {'Content-Type': 'text/plain'});

}).listen(1337);

console.log('Server running at http://10.0.0.10:1337/');