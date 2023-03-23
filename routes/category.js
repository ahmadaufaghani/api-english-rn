const express = require("express");
const categoryController = require("../controllers/category");
const router = express.Router();
const passport = require("passport");

router.get('/', passport.authenticate("jwt", {session : false}), categoryController.findAll);
router.post('/', passport.authenticate("jwt", {session : false}), categoryController.create);
router.put('/:id', passport.authenticate("jwt", {session : false}), categoryController.update);
router.delete('/', passport.authenticate("jwt", {session : false}), categoryController.delete);

module.exports = router;
