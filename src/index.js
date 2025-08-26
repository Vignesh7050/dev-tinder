const express = require("express");

const app = express();

app.use("/test", (req, res)=> {
    res.send("Calling route test")
})

app.listen(7777, ()=> {
    console.log("Express app is listening on port 7777")
})