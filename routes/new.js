const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("new")
  res.render('form', { test: 'New Page' });
});

router.post('/', (req, res, next) => {
  console.log('hello')
  console.log(req.body);
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date()
  })
})

module.exports = router;