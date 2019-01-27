'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AutorLibros', {      
      id_autor: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Autors',
          key: 'id',
          as: 'id_autor',
        },
      },
      id_libro: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Libros',
          key: 'id',
          as: 'id_libro',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AutorLibros');
  }
};