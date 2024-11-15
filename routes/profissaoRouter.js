const express = require('express');
const { getAllProfissoes } = require('../services/profissaoService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const profissoes = await getAllProfissoes();
    res.status(200).json(profissoes);
  } catch (error) {
    res.status(500).json({ error: error.message });  500
  }
});

module.exports = router;
