const router = require("express").Router();

router.use('/states', require('./states_layoffs'))


router.use((req, res, next) => {
  console.log(`404 Not Found: ${req.method} ${req.url}`);
  const error = new Error("404 Not Found in ./api");
  error.status = 404;
  next(error);
});

module.exports = router;
