const router = require('express').Router();
const withAuth = require('../utils/auth')
// const {} = require('../models') //model classes go here



router.get('/', (req, res) =>{
    console.log('/get homepage');
    res.render('homepage');
})




module.exports = router;