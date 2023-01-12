const jwt = require('jsonwebtoken');


const authenticate = (req, res, next) => {
    if(!req.headers.authorization) throw Error('Missing token')

    const token = req.headers.authorization.split(' ')[1];
      try {
        const user = jwt.verify(token, process.env.TOKEN_CODE);
        req.user = user;
        next();
      } catch (err) {
        res.send({ message: 'Invalid token' });
      }
    
  };

  module.exports = {authenticate}