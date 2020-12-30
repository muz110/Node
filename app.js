const express = require('express')
const app = express


app.get("/", function(req, res){
    res.send("Jatoi Software House Jatoi ")
})
app.listen(process.env.PORT || 5000)
module.exports = app