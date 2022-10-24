var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Parker",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Trevor",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  console.log("new")
  res.render('form', { test: 'New Page' });
});

router.post('/new', (req, res, next) => {
  console.log('hello')
  console.log(req.body);
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date()
  })

  res.redirect("/")
})

module.exports = router;
