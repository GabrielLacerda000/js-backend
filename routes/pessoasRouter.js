// routers/pessoaRouter.js
const express = require('express');
const router = express.Router();
const pessoaService = require('../services/pessoaService');

router.post('/', async (req, res) => {
  try {
    const pessoa = await pessoaService.createPessoa(req.body);
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const pessoas = await pessoaService.getAllPessoas();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const pessoa = await pessoaService.getPessoaById(req.params.id);
    res.status(200).json(pessoa);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const pessoa = await pessoaService.updatePessoa(req.params.id, req.body);
    res.status(200).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await pessoaService.deletePessoa(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;