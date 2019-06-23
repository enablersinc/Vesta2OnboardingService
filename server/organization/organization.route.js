const express = require('express');
const router = express.Router();
const organizationController = require('./organization.controller');

// routes
router.post('/submit', [submit]);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);

module.exports = router;

function submit(req, res, next) {
  organizationController
    .create(req.body)
    .then(url =>
      url
        ? res.status(200).json(url)
        : res.status(403).json({ message: 'Request failed please create your organization again' })
    )
    .catch(err => next(err));
}

function getById(req, res, next) {
  organizationController
    .getById(req.params.id)
    .then(price => (price ? res.json(price) : res.sendStatus(404)))
    .catch(err => next(err));
}

function getAll(res, next) {
  organizationController
    .getAll()
    .then(price => res.json(price))
    .catch(err => next(err));
}

function update(req, res, next) {
  organizationController
    .update(req.params.id, req.body)
    .then(url =>
      url
        ? res.json({ message: 'The organization has updated' }).send(200)
        : res.status(403).json({ message: ' Request failed please try again' })
    )
    .catch(err => next(err));
}
