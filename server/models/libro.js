'use strict';
module.exports = (sequelize, DataTypes) => {
  const Libro = sequelize.define('Libro', {
    titulo: DataTypes.STRING,
    fecha_eidcion: DataTypes.DATE
  }, {});
  Libro.associate = function(models) {
    Libro.belongsToMany(models.AutorLibro, {
      through: models.AutorLibro
    });    
  };
  return Libro;
};