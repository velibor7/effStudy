const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_hehe");
    // saljemo ovo dalje u sledeci middleware
    console.log("THIS IS IN THE TOKEEENNN: ===========");
    console.log(decodedToken);
    console.log("===================");
    // console.log(req.body.fullName);
    req.userData = {
      // fullName: req.body.fullName,
      // occupation: req.body.occupation,
      username: decodedToken.username,
      userId: decodedToken.userId,
    };
    // console.log;
    next();
  } catch (error) {
    res.status(401).json({ message: "auth failed" });
  }
};
