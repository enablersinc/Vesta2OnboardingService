const User = require('./user.model');

function get(req, res) {
  return res.json(req.user);
}

function create(req, res, next) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

function update(req, res, next) {
  const user = req.user;
  if (user.name) user.name = req.body.name;
  if (user.email) user.email = req.body.email;
  if (user.password) user.password = req.body.password;

  user
    .save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

module.exports = { get, create, update };
