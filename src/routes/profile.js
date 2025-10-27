const express = require('express');
const userAuth = require('../middlewares/userAuth');

const profileRoutes = express();

profileRoutes.get('/details', userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.status(200).send({ user });
  } catch (error) {
    res.status(400).send({ message: `ERROR: ${error.message}` });
  }
});

module.exports = profileRoutes;
