const router = require('express').Router();
const { User, Post, Comment } = require('../model');
const withAuth = require('../utils/auth');


// create route for opening page
router.get('/', async (req, res) => {});


// route to log in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

//route to log out
router.get('/', async (req, res) => {});

//route to get posts
router.get('/', async (req, res) => {});


//route to get comments
router.get('/', async (req, res) => {});

//route to get dashboard

router.get('/', async (req, res) => {});



module.exports = router;







 //extra stuff.....
// //get route to check if logged in
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       //order: [['name', 'ASC']], //not sure what this is
//     });
//     //making the user data to variable users
//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });