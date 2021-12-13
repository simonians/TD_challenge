const express = require("express");
const app = express();


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
app.listen( PORT, () => {
    console.log("Server on port ", app.get("port"))
})