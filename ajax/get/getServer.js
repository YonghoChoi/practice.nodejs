var app = require("express")();
var url = require("url");
app.get("/", function(req, res) {
  console.log("get: getAsync.html, ", __dirname);
  res.sendFile("getAsync.html", {root: __dirname});
});

app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace("/", "");
  res.sendFile(fileName, {root: __dirname});
  console.log("use : ", fileName);
});

app.listen(3000);
console.log("port 3000");
