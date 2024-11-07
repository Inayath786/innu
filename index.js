const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));
function greet(price, discount) {
  let final = price - discount;
  return 'Final price is ' + final;
}

app.get('/check', (req, res) => {
  let discount = req.query.discount;
  let price = req.query.price;
  res.send(greet(price, discount));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
