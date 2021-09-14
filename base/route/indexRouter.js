const router = require('express').Router()
const userRouter = require("../../user/route/userRouter");
const companyRouter = require("../../company/route/companyRouter")

router.use(function timeLog(req, res, next) {
  console.log(
    "Time: ",
    new Date().toISOString() + " - " + req.method + " - " + req.originalUrl
  );
  next();
});

router.use("/user", userRouter)
router.use("/company", companyRouter)

module.exports = router