require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rotas = require('./rota/routes');

const app = express();

app.use(cors());
app.use(express.json());

// Prefixo "/api" para as rotas
app.use('/api', rotas);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
});

