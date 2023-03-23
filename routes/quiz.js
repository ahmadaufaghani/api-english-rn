const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz");
const passport = require("passport");

router.get('/', passport.authenticate("jwt",{session : false}), quizController.getAll);
router.get('/quiz-with-category', passport.authenticate("jwt", {session : false}), quizController.quizWithCategory);
router.post('/', passport.authenticate("jwt", {session:false}), quizController.create);
router.put('/:id', passport.authenticate("jwt", {session:false}), quizController.update);
router.delete('/:id', passport.authenticate("jwt", {session:false}), quizController.delete);
router.get('/:id', passport.authenticate("jwt", {session:false}), quizController.findOne);
router.get('/quiz-category/:id', passport.authenticate("jwt", {session:false}), quizController.findByCategory);

module.exports = router;