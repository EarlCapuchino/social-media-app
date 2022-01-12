const router = require("express").Router()

router.get("/", (req, res)=>{
    res.send("its router")
})

module.exports = router