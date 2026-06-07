const app = require("./app")
const config = require("./config")

const PORT = config.PORT

app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`)
})