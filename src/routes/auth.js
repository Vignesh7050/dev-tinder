const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const authRoutes = express();

authRoutes.post('/signup', async (req, res) => {
  try {
    /**Get the body parameter by destructuring request object */
    const { body } = req;
    const {
      firstName,
      lastName,
      age,
      gender,
      about,
      photoUrl,
      emailId,
      password,
      skills,
    } = body;

    /**TODO: Validating the body object */

    /**Hashing the password */
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      firstName,
      lastName,
      age,
      gender,
      about,
      photoUrl,
      emailId,
      skills,
      password: hashedPassword
    };

    const userInstance = new User(user);

    await userInstance.save();

    res.status(200).send({ message: `User added successfully. User name: ${firstName} ${lastName}` });
  } catch (error) {
    res.status(400).send({ message: `ERROR: ${error.message}` });
  }
});

authRoutes.get('/login', async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({emailId: emailId});

    if(!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
      throw new Error('Invalid credentials')
    }

    res.send({message: 'Login Successful'})
  } catch(error) {
    res.status(404).send('ERROR: ' + error.message)
  }
})

module.exports = authRoutes;
