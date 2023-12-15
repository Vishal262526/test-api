const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.status(200).json({message:"Api is Running Successfully"});
})


app.listen(3001, (err) => {
    if(err) throw err;
    console.log("Server is connected at Port:8080");
})