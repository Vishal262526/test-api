const express = require("express");
const app = express();


const users = require("./routes/users");

app.use("/user", users);


app.listen(3001, (err) => {
    if(err) throw err;
    console.log("Server is connected at Port:8080");
})