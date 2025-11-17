const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/conteudos', (req, res) => {
  const query = req.query.query || '';
  const dados = [
    { id: 1, titulo: 'Redes de Computadores' },
    { id: 2, titulo: 'Banco de Dados' },
    { id: 3, titulo: 'Programação Web' }
  ];

  const filtrados = dados.filter(d =>
    d.titulo.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filtrados);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('API rodando na porta ' + PORT));