const express = require("express");
const app = express();
const port = 3000;

// route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/tin-tuc", (req, res) => {
    let a = 1;
    let b = 2;
    let c = a + b;
    res.send("Tin tuc page");
});

// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
