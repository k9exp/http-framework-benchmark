const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("ABCD");
})

console.log("Listening at http://127.0.0.1:3000")
app.listen(3000);
