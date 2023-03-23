const express = require("express");
const materialController = require("../controllers/material");
const router = express.Router();
const passport = require("passport");

router.get('/', passport.authenticate("jwt", {session : false}), materialController.findAll);
router.post('/', passport.authenticate("jwt", {session : false}), materialController.create);
router.put('/:id', passport.authenticate("jwt", {session : false}), materialController.update);
router.delete('/', passport.authenticate("jwt", {session : false}), materialController.delete);
router.get('/material-with-category/:id', passport.authenticate("jwt", {session : false}), materialController.findByCategory);
router.get('/material-category', passport.authenticate("jwt", {session : false}), materialController.materialWithCategory);

module.exports = router;
