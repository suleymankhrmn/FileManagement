const router = require('express').Router()
const CompanyService = require('../service/CompanyService')

router.get("/", async (req, res) => {
    res.send("Hello")
})

module.exports = router