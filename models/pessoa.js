module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('Pessoa', {
      nome: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      profissao_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Profissoes', 
          key: 'id',
        },
      },
    },
    {
      tableName: 'Pessoas',
      timestamps: true,
    });
  
    Pessoa.associate = (models) => {
      Pessoa.belongsTo(models.Profissao, { foreignKey: 'profissao_id' });
    };
  
    return Pessoa;
  };
  