const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use(express.json())
app.use("/api/auth", require("../routes/auth.route"))
app.use("/api/user", require("../routes/user.route"))

module.exports = app