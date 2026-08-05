const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('API funcionando');
});

app.get('/usuarios', (req, res) => {
  res.json([
      { id: 1, nome: 'joão' },
      {id: 2, nome: 'maria' }
   ]);
});

module.exports = app;