const router = require('express').Router();
const { User, Post, Comment } = require('../../model');


//require proper model (message)

// a get route for all of the users
router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll(
            { include: [{model: Post}, {model: Comment}]}
            )
        if (!userData){
            res.status(400).json({message: "there are no users"})
            return;
        }
        res.status(200).json(userData)

    }catch(err){res.status(500).json(err)}

});

//Post route to check if user exits 
router.post('/', async (req, res) => {
    try{
        const userData = await User.findAll(
            { include: [{model: Post}, {model: Comment}]}
            )
        if (!userData){
            res.status(400).json({message: "there are no users"})
            return;
        }
        res.status(200).json(userData)

    }catch(err){res.status(500).json(err)}

});

module.exports = router;
