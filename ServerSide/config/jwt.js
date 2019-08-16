const jwt = require('jsonwebtoken');
const config = require('config');

function sign(payload, expiresIn = 360000) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: expiresIn },
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      }
    );
  });
}

module.exports = sign;
