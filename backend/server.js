import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/bruh', (req, res) => {
  res.status(200).json({ message: 'Hello from the server, SDIYBT' });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'This request does not exist' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
