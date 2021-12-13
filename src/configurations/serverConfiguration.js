const serverConfig = {
    NODE_ENV: process.env.NODE_ENV || "development",
    HOST: process.env.HOST || "0.0.0.0",
    PORT: process.env.PORT || 8080
}

module.exports = serverConfig