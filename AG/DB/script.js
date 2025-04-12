var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ag",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/execute_query", function (req, res) {
  connection.query(req.body.query, function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while executing the query.");
      return;
    }

    if (err) throw err;
    var html = "<table>";
    for (var i = 0; i < result.length; i++) {
      html += "<tr>";
      for (var key in result[i]) {
        if (result[i].hasOwnProperty(key)) {
          html += "<td>" + result[i][key] + "</td>";
        }
      }
      html += "</tr>";
    }
    html += "</table>";
    res.send(html);
  });
});

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
