const express = require("express");
const handler = require("./httpHandler.js");
const exerciseController = require("./exerciseController");
const bodyParser = require("body-parser");

const port = 8082;
const server = express();

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.use("/client", express.static("./jquery-mockup"))
server.use("/old", handler.main);
server.use("/exercise", exerciseController.router);

server.listen(port);

console.log(`http://localhost:${port}`);