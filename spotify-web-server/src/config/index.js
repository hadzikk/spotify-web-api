const dotenv = require("dotenv")
dotenv.config()

module.exports = {
    PORT: process.env.PORT,
    CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI,
}