const jwt = require('jsonwebtoken');

module.exports = (req) => {
  const token = req.headers.authorization;
  const currentTime = Math.floor(Date.now() / 1000);
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SALT);
  } catch (err) {
    return {data:false, token: false};
  }
  if (!decodedToken) {
    return {data:false, token: false};
  }

  const remainingTime = Math.floor((decodedToken.exp - currentTime)/60);

  if(remainingTime <= 5){
    const newToken = jwt.sign({data: decodedToken.data},
        process.env.JWT_SALT,
        {
          expiresIn: process.env.JWT_EXPIRE,
        });
    return {
      data:decodedToken.data,
      token: newToken
    }
  }

  return {
    data:decodedToken.data,
    token: false
  }
};
