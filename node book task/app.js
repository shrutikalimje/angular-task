const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/index");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);
app.listen(3000);
console.log("app started at : 3000");
