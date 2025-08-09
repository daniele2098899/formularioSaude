const FormData = require('../models/FormData');

exports.salvarDados = async (req, res) => {
  try {
    const { nome, email, peso, altura } = req.body;

    if (!nome || !email || !peso || !altura) {
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    const formData = new FormData({ nome, email, peso, altura });
    await formData.save();

    return res.json({ mensagem: 'Dados salvos com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro no servidor.' });
  }
};
