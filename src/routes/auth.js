const express = require('express');
const bcrypt = require('bcrypt');

const authRoutes = express();

authRoutes.post('/signup', async (req, res) => {
  try {
    /**Get the body parameter by destructuring request object */
    const { body } = req;

    /**TODO: Validating the body object */

    /**Hashing the password */
    const password = body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    res.status(200).send({hashedPassword})

  } catch (error) {
    res.status(400).send({message: `ERROR: ${error.message}`})
  }
});

module.exports = authRoutes;
