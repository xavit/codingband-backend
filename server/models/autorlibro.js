'use strict';
module.exports = (sequelize, DataTypes) => {
  const AutorLibro = sequelize.define('AutorLibro', {
    id_autor: DataTypes.INTEGER,
    id_libro: DataTypes.INTEGER
  }, {});
  AutorLibro.associate = function(models) {
    AutorLibro.belongsTo(models.Autor);
    AutorLibro.belongsTo(models.Libro);
  };
  return AutorLibro;
};