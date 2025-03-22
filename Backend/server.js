const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/numbers/even", (req, res) => {
    res.json({ numbers: [2, 4, 6, 8, 10] });
});
app.get("/numbers/primes", (req, res) => {
    res.json({ numbers: [2, 3, 5, 7, 11] });
});

app.get("/numbers/fibo", (req, res) => {
    res.json({ numbers: [55, 89, 144, 233] });
});

app.get("/numbers/rand", (req, res) => {
    res.json({ numbers: [2, 19, 25, 7, 4] });
});

app.listen(9876, () => {
    console.log("Server running on http://localhost:9876");
});
