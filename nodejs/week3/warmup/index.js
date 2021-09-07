const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/multiply", (req, res) => {
    return calculate(req.query, 'multiply', 1, res);
});

app.post("/calculator/multiply", (req, res) => {
    return calculate(req.body, 'multiply', 1, res);
});

app.get("/calculator/add", (req, res) => {
    return calculate(req.query, 'add', 0, res);
});

app.post("/calculator/division", (req, res) => {
    return calculate(req.body, 'division', 0, res);
});

function calculate(data, operator, intialiser, res){
    let result=intialiser;
    for (const param in data) {
        const intValue = parseInt(data[param]);
        if (isNaN(intValue)){
            return res.status(400).send('Please provide valid numbers');
        }
        switch(operator) {
            case 'multiply': 
                result = result * intValue;
                break;
            case 'add':
                result = result + intValue;
                break;
            case 'division':
                console.log(data);
                result = data.firstParam / data.secondParam;
                break;
            default:
                break;
          }
        
    }
    res.send(`Result: ${result}`)
}

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));