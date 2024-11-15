module.exports = (sequelize, DataTypes) => {
    const Profissao = sequelize.define('Profissao', {
      descricao: DataTypes.TEXT,
    },
  {
    tableName: 'Profissoes',
    timestamps: true
  });
    
    Profissao.associate = (models) => {
      Profissao.hasMany(models.Pessoa, { foreignKey: 'profissao_id' });
    };
  
    return Profissao;
  };
  