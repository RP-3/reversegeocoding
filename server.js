var gm = require('googlemaps');
var http = require('http');
var util = require('util');

http.createServer(function (req, res) {
  gm.reverseGeocode('-33.753211,151.08205', function(err, data){
    console.log(err);
    console.log(data);

    for (var element = 0; element < data.results.length; element++) {
      console.log(data.results[element].geometry.location_type);
      console.log(data.results[element].formatted_address);
      console.log();
    } 

    res.end();
  });


  res.writeHead(200, {'Content-Type': 'text/plain'});

}).listen(1337);

console.log('Server running at http://10.0.0.10:1337/');