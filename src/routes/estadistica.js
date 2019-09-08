const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../helpers/auth');

/*
router.get('/notes/add', isAuthenticated, (req, res) => {
  res.render('notes/new-note');
});
*/
router.get('/esta', isAuthenticated, (req, res) => {
res.render('machine/arcangel');
});

router.get('/esta/algo', isAuthenticated, (req, res) => {
  res.render('machine/proyec');
});



module.exports = router;