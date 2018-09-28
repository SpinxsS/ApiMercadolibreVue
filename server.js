
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + "/src/"));
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/src/index.html");
});
app.listen(port);

console.log("Server started...");