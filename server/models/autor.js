'use strict';
module.exports = (sequelize, DataTypes) => {
  const Autor = sequelize.define('Autor', {
    nombre: DataTypes.STRING
  }, {});
  Autor.associate = function(models) {
    
    Autor.belongsToMany(models.Libro, {
      through: models.AutorLibro
    });
    // Autor.belongsToMany(models.AutorLibro, {
    //   as: 'Libros',
    //   through: {
    //     model: models.AutorLibro,
    //     unique: false
    //   },
    //   foreignKey: 'id_libro'
    // });

  };
  return Autor;
};