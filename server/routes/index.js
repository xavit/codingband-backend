const autoresController = require('../controllers').autores;
const librosController = require('../controllers').libros;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Bienvenidos a la API de Librerìa!',
  }));

  //Autores
  app.post('/api/autores', autoresController.create);
  app.get('/api/autores', autoresController.list);

  //Libros
  app.post('/api/libros', librosController.create);
  app.get('/api/libros', librosController.list);
};