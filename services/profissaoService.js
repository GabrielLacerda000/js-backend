const { Profissao } = require('../models');  
async function getAllProfissoes() {
  try {
    const profissoes = await Profissao.findAll();  
    return profissoes;
  } catch (error) {
    throw new Error('Erro ao buscar profissões: ' + error.message);
  }
}

module.exports = { getAllProfissoes };
