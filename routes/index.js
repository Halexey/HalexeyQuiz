var express = require('express');
var router = express.Router();

var quizControler = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' ,errors:[]});
});
router.get('/author', function(req, res) {
	res.render('author', {});
});

router.param('quizId', quizControler.load);

//router.get('/quizes/question', quizControler.question);
//router.get('/quizes/answer', quizControler.answer);

router.get('/quizes', quizControler.index);
router.get('/quizes/:quizId(\\d+)', quizControler.show);
router.get('/quizes/:quizId(\\d+)/answer', quizControler.answer);
//mod8
router.get('/quizes/new', quizControler.new);
router.post('/quizes/create', quizControler.create);
router.get('/quizes/:quizId(\\d+)/edit', quizControler.edit);
router.put('/quizes/:quizId(\\d+)', quizControler.update);
	router.delete('/quizes/:quizId(\\d+)',quizControler.destroy);

module.exports = router;
