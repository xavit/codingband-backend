'use strict';
module.exports = (sequelize, DataTypes) => {
  const Autor = sequelize.define('Autor', {
    nombre: DataTypes.STRING
  }, {});
  Autor.associate = function(models) {
    
    Autor.belongsToMany(models.AutorLibro, {
      through: models.AutorLibro
    }
    );

  };
  return Autor;
};