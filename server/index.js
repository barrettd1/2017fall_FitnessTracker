const express = require("express");
const handler = require("./httpHandler.js");
const exerciseController = require("./exerciseController");

const server = express();

server.use("/client", express.static("./jquery-mockup"))
server.use("/old", handler.main);
server.use("/recorder", exerciseController.router);

server.listen(3001);

console.log("http://localhost:3001");