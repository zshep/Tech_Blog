const router = require('express').Router();
const login_route = require('./login_route');
const message_route = require('./message_route');

//settig up routes for login and message
router.use('/', login_route);
router.use('/', message_route);

module.exports = router;