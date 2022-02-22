const router = require("express").Router();
const moviesRouter = require("./movies.routes")
const celebritiesRouter = require("./celebrities.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use("/movies", moviesRouter)
router.use("/celeb", celebritiesRouter)

module.exports = router;
