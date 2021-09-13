const router = require('express').Router()
const userRouter = require("../../user/route/userRouter");

router.use(function timeLog(req, res, next) {
    console.log(
      "Time: ",
      new Date().toISOString() + " - " + req.method + " - " + req.originalUrl
    );
    next();
  });

router.use("/user", userRouter);

module.exports = router