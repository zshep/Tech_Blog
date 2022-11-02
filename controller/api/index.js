const router = require('express').Router();
const post_route = require('./post_route');
const user_route = require('./user_route');

//settig up routes for login and message
router.use('/post', post_route);
router.use('/user', user_route);

module.exports = router;