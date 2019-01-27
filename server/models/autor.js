'use strict';
module.exports = (sequelize, DataTypes) => {
  const Autor = sequelize.define('Autor', {
    nombre: DataTypes.STRING
  }, {});
  Autor.associate = function(models) {
    Autor.belongsToMany(models.Libro, {
      as: 'Books',
      through: 'autor_libros',
      foreignKey: 'userId'
    });
  };
  return Autor;
};