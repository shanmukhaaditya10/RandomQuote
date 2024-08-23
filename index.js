const cors = require('cors');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(cors());
app.get('/random', async (req, res) => {
  const quotes = JSON.parse(fs.readFileSync('./quotes.json'));
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  res.json({ content: quote.sentence });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
