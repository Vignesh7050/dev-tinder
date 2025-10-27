const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Steps:
 * 1. Get the token from the request cookies
 * 2. Check if token is present else throw an error
 * 3. Verify the token and get the user _id stored in the token
 * 4. Check if user is present else throw user not found error
 * 5. If user is present call next to execute next middleware function of the API call
 */

const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    if (!token) {
      throw new Error('Unauthorized access');
    }

    const decodedToken = jwt.verify(token, 'Secrete@123$JWT');
    const { _id } = decodedToken;

    const user = await User.findById(_id);

    if (!user) {
      throw new Error('User not found');
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message || 'Unauthorized access' });
  }
};

module.exports= userAuth;
