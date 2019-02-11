function getAndPrintHTMLChunks() {
  var http = require("https");

  var requestOptions = {
    host: "sytantris.github.io"
  };
  
  var req = http.get(requestOptions, function (response) {
    var array = [];

    response.on("data", function (data) {
      console.log("Data received. Length:", data.length);
      array.push(data);
    });
  
    response.on("end", function () {
      var body = Buffer.concat(array);
      console.log(body.toString());
    });
  });
  
  req.end();
}
console.log(getAndPrintHTMLChunks()); 