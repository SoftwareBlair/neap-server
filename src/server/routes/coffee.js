const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

router.get('/', (req, res, next) => {
  return knex('coffee')
  .then((data) => {
    res.status(200).json({
      status: 'success',
      data: data
    });
  })
  .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const coffeeID = parseInt(req.params.id);

  return knex('coffee').where('id', coffeeID).first()
  .then((data) => {
    res.status(200).json({
      status: 'success',
      data: data
    });
  })
  .catch(err => next(err));
});

module.exports = router;
