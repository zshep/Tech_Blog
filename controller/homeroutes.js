const router = require('express').Router();
const { User, Post, Comment } = require('../model');
const withAuth = require('../utils/auth');



// route to log in
router.get('/login', (req, res) => {
  try {
    //view the login handlebars
    res.status(200).render('login')
  } catch(err) {res.status(500).json(err)}
});

// route to sign in
router.get('/signup', (req, res) => {
  try {
    //view the login handlebars
    res.status(200).render('signup')
  } catch(err) {res.status(500).json(err)}
});


//route to log out
router.get('/logout', async (req, res) => {
  try {
    //view the login handlebars
    res.status(200).render('logout')
  } catch(err) {res.status(500).json(err)}
  
});

//route to landingpage
router.get('/landingpage', async (req, res) => {
  try {
    //view the login handlebars
    res.status(200).render('landingpage')
  } catch(err) {res.status(500).json(err)}
  
});

//route to dashboard
router.get('/dashboard', async (req, res) => {
  try {
    //view the dashboardhandlebars
    res.status(200).render('dashboard')
  } catch(err) {res.status(500).json(err)}
  
});

//route to get all the posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
        include: [{ model: User,
            attributes: ['user_name'] 
        },
        { model: Comment,
        include: { model: User,
            attributes: ['user_name'],
            where: Comment.user_id = User.id,
          } 
        }]
    })
    const posts = postData.map((post) => post.get({plain:true}))
    const comments = posts.map((post) => post.comments)
    const users = comments.map((user) => user)
    res.status(200).render('landingpage', {
        posts, comments
    }) 
  } catch(err) {
  res.status(500).json(err)}
});




//route to get dashboard




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