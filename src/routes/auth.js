const express = require('express');

const authRoutes = express();

authRoutes.post('/signup', async (req, res) => {
   //Sign up api logic here
})

module.exports = authRoutes;