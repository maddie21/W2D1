function getAndPrintHTMLChunks() {
  var http = require("https");

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };
  
  var req = http.get(requestOptions, function (response) {
    // var array = [];

    response.setEncoding("utf8");

    response.on("data", function (data) {
      console.log("Data received. Length:", data.length);
      console.log(data);
      console.log("\n");
    });
  
    response.on("end", function () {
      console.log("Completed Call")
    });
  });
  
  req.end();
}
console.log(getAndPrintHTMLChunks()); 