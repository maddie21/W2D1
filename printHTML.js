function getAndPrintHTML() {
    var http = require("https");
    var requestOptions = {
        host: "sytantris.github.io",
        path: "/http-examples/step2.html"
    };
    
    var req = http.get(requestOptions, function (response) {
        var string = "";
    
        response.setEncoding("utf8");
    
        response.on("data", function (data) {
            console.log("Data received. Length:", data.length);
            string = string + data + "\n";
        });
    
        response.on("end", function () {
            console.log(string);
        });
    });
    
    req.end();
}
console.log(getAndPrintHTML()); 