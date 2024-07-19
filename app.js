var express = require('express');
var path = require('path');
//var routes =require("./routes");
var app = express();

app.set("port",process.env.PORT|| 8080);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use("/images", express.static('image'));
app.use("/2024events", express.static('image/events/2024'));
app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));
app.use("/year", express.static('year'));

app.listen(app.get("port"), function(){
 console.log("server started on"+ app.get("port"));
});
