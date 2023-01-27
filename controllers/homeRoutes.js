const router = require('express').Router();
const withAuth = require('../utils/auth')
const {Blog, User} = require('../models')
// const {} = require('../models') //model classes go here




  router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const blogs = blogData.map((blogmapped) => blogmapped.get({ plain: true }));
    console.log('/get homepage');
    res.render('homepage', blogs);

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