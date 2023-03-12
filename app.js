const express = require("express");
const application = express();

application.get("/",function(req, res){
  res.write("Homepage!");
  res.status(200).send();
});

application.get("/about", function(req, res){
  res.write("About page!");
  res.status(200).send();
});

application.all("*", function(req, res){
  res.write("Page not found!");
  res.status(404).send();
});


application.listen(5000, ()=>{
  console.log("Express server listening on port 5000");
})
