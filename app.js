const express = require("express");
const StaticData = require("./static/_data.json");
const expressInstance = express();

/**
//      MIDDLEWARE FUNCTION
// middleware function
function logger(req) {
  console.log("[", req.method, "] : ", req.headers.host + req.url);
}

expressInstance.use(logger); //use for all routes.

// expressInstance.use("/", logger)  // correct
// expressInstance.use("/", [logger,])  // correct
// expressInstance.use(["/"], logger)  // correct

expressInstance.get("/", function (req, res) {
  return res.status(200).json(StaticData);
});

expressInstance.get("/user/:userId", function (req, res) {
  logger(req);
  const { userId } = req.params;
  if (userId == undefined) {
    return res.status(400).json({ message: " Check your url " });
  }

  const userInstance = StaticData.find((user) => user.id === parseInt(userId));
  if (userInstance === undefined)
    return res.status(404).json({ message: "User not found!" });

  res.status(200).json(userInstance);
});

expressInstance.listen(8000, function () {
  console.log("Serving on http://localhost:8000");
});
 **/



/**
//      JSON RESPONSE.
serverInstance.get("/", function (req, res) {
  res.status(200).json([{ name: "susan" }]);
});

serverInstance.listen(8000, function (req, res) {
  console.log({ server: "Serving application on http://localhost:8000" });
});
 **/

/**
//      SERVING STATIC FILES AND BASIC EXPRESS.
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
 **/
