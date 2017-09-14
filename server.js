const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 8000;

let db = require('./database/connection');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(express.static("public"));

require('./routes/routes.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});