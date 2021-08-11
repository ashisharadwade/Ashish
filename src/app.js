const express = require("express");
const app = express();

app.get("/",(req , res ) => {
   res.send("hello world from the express");
});

app.get("/about",(req , res) => {
    res.send("hello from about side")
})

app.get("/contact",(req , res) => {
    res.send("hello from contact side");
})

app.listen(8000 , () => {
    console.log("listening the port 8000");
});

// const express = require("express");
// const app = express();

// app.get("/",(req ,res) => {
//     res.send("sid  darling");
// });

// app.listen(8000 , () => {
//     console.log("listening the port 8000")
// })