const Autor = require('../models').Autor;

module.exports = {
  create(req, res) {
    return Autor
      .create({
        nombre: req.body.nombre,
      })
      .then(autor => res.status(201).send(autor))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Autor
      .all()
      .then(autor => res.status(200).send(autor))
      .catch(error => res.status(400).send(error));
  },
};