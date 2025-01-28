const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const votes = { Kaffee: 0, Tee: 0, Wasser: 0 };

// Stimmen speichern
app.post('/vote', (req, res) => {
  const { option } = req.body;
  if (votes[option] !== undefined) {
    votes[option]++;
    res.status(200).send('Abstimmung gespeichert');
  } else {
    res.status(400).send('Ungültige Option');
  }
});

// Ergebnisse senden
app.get('/results', (req, res) => {
  res.json(votes);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));
