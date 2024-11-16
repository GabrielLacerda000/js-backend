const { Pessoa, Profissao } = require('../models');

const createPessoa = async (data) => {
  try {
    const pessoa = await Pessoa.create(data);
    return pessoa;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllPessoas = async () => {
  try {
    const pessoas = await Pessoa.findAll({
      include: [
        {
          model: Profissao,
          attributes: ['descricao'],
        },
      ],
    });
    return pessoas;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPessoaById = async (id) => {
  try {
    const pessoa = await Pessoa.findByPk(id, { include: Profissao });
    if (!pessoa) throw new Error('Pessoa não encontrada');
    return pessoa;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updatePessoa = async (id, data) => {
  try {
    const pessoa = await Pessoa.findByPk(id);
    if (!pessoa) throw new Error('Pessoa não encontrada');
    await pessoa.update(data);
    return pessoa;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deletePessoa = async (id) => {
  try {
    const pessoa = await Pessoa.findByPk(id);
    if (!pessoa) throw new Error('Pessoa não encontrada');
    await pessoa.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createPessoa,
  getAllPessoas,
  getPessoaById,
  updatePessoa,
  deletePessoa
};
