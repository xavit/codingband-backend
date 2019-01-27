'use strict';
module.exports = (sequelize, DataTypes) => {
  const Libro = sequelize.define('Libro', {
    titulo: DataTypes.STRING,
    fecha_eidcion: DataTypes.DATE
  }, {});
  Libro.associate = function(models) {
    Libro.belongsToMany(models.Libro, {
      as: 'Autors',
      through: 'libro_autor',
      foreignKey: 'libroId'
    });
  };
  return Libro;
};