const express = require('express');
const router = express.Router();

const moviesCtrl = require("../controllers/movie")
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET Movies index /movies
router.get('/', moviesCtrl.index)

// GET Movies show /movies/:id
router.get("/:id", moviesCtrl.show)

module.exports = router;
