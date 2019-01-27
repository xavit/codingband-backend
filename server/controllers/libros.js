const Libro = require('../models').Libro;

module.exports = {
  create(req, res) {
    return Libro
      .create({
        titulo: req.body.titulo,
        fecha_eidcion: req.body.fecha_eidcion,
      })
      .then(libro => res.status(201).send(libro))
      .catch(error => res.status(400).send(error));
  },
};