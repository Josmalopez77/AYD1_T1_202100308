const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let canciones = [];

app.post('/cancion', (req, res) => {
  const { nombre, artista, album } = req.body;
  const nuevaCancion = { nombre, artista, album };
  canciones.push(nuevaCancion);
  res.status(201).json(nuevaCancion);
});

app.get('/informacion', (req, res) => {
    res.json({
      nombre: "José Manuel López Lemus",
      carnet: "202100308"
    });
  });
  

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
