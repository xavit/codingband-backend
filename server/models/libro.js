'use strict';
module.exports = (sequelize, DataTypes) => {
  const Libro = sequelize.define('Libro', {
    titulo: DataTypes.STRING,
    fecha_eidcion: DataTypes.DATE
  }, {});
  Libro.associate = function(models) {
    Libro.belongsToMany(models.Autor, {
      through: models.AutorLibro
    });    
    // Libro.belongsToMany(models.LibroLibro, {
    //   as: 'Autores',
    //   through: {
    //     model: models.LibroLibro,
    //     unique: false
    //   },
    //   foreignKey: 'id_autor'
    // });
  };
  return Libro;
};