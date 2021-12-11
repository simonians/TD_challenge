const express = require("express");
const app = express();

// Settings
app.set("port", process.env.PORT || 8080);

// Middlewares
app.use(express.json())

// Routes
app.use(require("./routes/customer_route"))

//Starting server
app.listen((8080), () => {
    console.log("Server on port ", app.get("port"))
})