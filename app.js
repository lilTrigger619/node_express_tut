const express = require("express");
const application = express();
//const { createReadStream, readFile } = require("fs");
const path = require("path");

application.use(express.static("./static")); // to access static files else it will return 404.

application.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./static/app.html")); //send a file.
  //  res.status(200).send();
});

application.get("/about", function (req, res) {
  res.write("About page!");
  res.status(200).send();
});

application.all("*", function (req, res) {
  res.write("Page not found!");
  res.status(404).send();
});

application.listen(5000, () => {
  console.log("Express server listening on port 5000");
});
