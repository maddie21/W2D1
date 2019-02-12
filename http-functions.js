module.exports = function getHTML(requestOptions, callback) {
    var http = require("https");
    
    var req = http.get(requestOptions, function (response) {

        var string = "";
    
        response.setEncoding("utf8");
    
        response.on("data", function (data) {
            console.log("Data received. Length:", data.length);
            string = string + data + "\n";
        });
    
        response.on("end", function () {
            // console.log(string);
            callback(string);
        });
    });
    
    req.end();
}