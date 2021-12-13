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
app.use(require("./routes/customer_route"))

//Starting server
app.listen( PORT, () => {
    console.log("Server on port ", app.get("port"))
})