const express = require("express")
const router = express.Router()
const controller = require("../controllers/auth.controller")

router.get("/login", controller.login)
router.get("/callback", controller.callback)
router.get("/token", controller.token)

module.exports = router