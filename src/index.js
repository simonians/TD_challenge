const express = require("express");
const app = express();
const path = require("path")

const serverConfig = require("./configurations/serverConfiguration")
const PORT = serverConfig.PORT;
const HOST = serverConfig.HOST


// Settings
app.set("port", PORT);

// Middlewares
app.use(express.json())

// Routes
app.use(require("./customers"))
app.use(require("./credits"))

//Starting server
const server = app.listen(PORT, HOST)

//Página principal

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
})

module.exports = {app, server};