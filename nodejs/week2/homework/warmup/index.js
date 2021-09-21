const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
    let sumOfNumbers = parseInt(req.query.first) + parseInt(req.query.second);
    res.send(`Sum: ${sumOfNumbers}`);
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
    let multiplyNumbers = parseInt(req.params.first) * parseInt(req.params.second);
    res.send(`Multiply: ${multiplyNumbers}`);  
});


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
