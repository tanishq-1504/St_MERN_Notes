const express = require("express");

console.log("Welcome to your first backend server");

const app = express();
const PORT = 3000;

app.get("/welcome", (request, response)=>{
    response.json({
        message: "Welcome to first api calling......."
    })
})

app.listen(PORT, function () {
    console.log("Server is running at port:", PORT);
});