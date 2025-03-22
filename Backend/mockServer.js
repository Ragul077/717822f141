const express = require('express');

const mockA = express();
const mockP = 9001; 


const mockD = {
  primes: [2, 3, 5, 7, 11],
  fibo: [55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765],
  even: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
  rand: [2, 19, 25, 7, 4, 24, 17, 27, 30, 21, 14, 10, 23],
};


mockA.get('/primes', (req, res) => {
  res.json({ numbers: mockD.primes });
});

mockA.get('/fibo', (req, res) => {
  res.json({ numbers: mockD.fibo });
});

mockA.get('/even', (req, res) => {
  res.json({ numbers: mockD.even });
});

mockA.get('/rand', (req, res) => {
  res.json({ numbers: mockD.rand });
});


mockApp.listen(mockP, () => {
  console.log(`Mock Server running on http://localhost:${mockPort}`);
});