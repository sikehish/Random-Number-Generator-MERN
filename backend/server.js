const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: [
    'http://localhost:5173', 
    'https://8db9-117-242-171-47.ngrok-free.app',
  ],
};

app.use(cors(corsOptions));

app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; 
  res.json({ number: randomNumber });
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});