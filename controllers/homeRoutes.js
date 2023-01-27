const router = require('express').Router();
const withAuth = require('../utils/auth')
// const {} = require('../models') //model classes go here



router.get('/', (req, res) =>{
    console.log('/get homepage');
    res.render('homepage');
})

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Blog }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;