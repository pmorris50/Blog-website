const router = require('express').Router();
const { User } = require('../../models');
// endpoint is /api/user
router.post('/new', async (req, res) =>{
try {
    const userData = await User.create(req.body);
    console.log(userData)

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.status(200).json(userData)
})
} catch (err){
    console.log(err);
    res.status(400).json(err);
}}),


router.post('/login', async (req, res) => {
    console.log(req.body)
    // console.log('email', req.body.email)
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);
        console.log('email', req.body.email)
        if (!userData) {
            console.log('invalid user email')
            res.status(500).json({
                message: 'Incorrect email or password, please try again'
            });
            return;
        }
        console.log('email was found successfully')
        const validPassword = await userData.checkPassword(req.body.password);
        console.log(req.body.password)
        console.log(validPassword)
        if (!validPassword) {
            console.log("invalid password");
            res.status(500).json({
                message: 'Incorrect email or password, please try again'
            });
            return;
        }
        console.log('password', req.body.password)
        console.log('password check complete')
        req.session.save(() => {

            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err)
        res.status(500).json( {message: 'Incorrect email or password, please try again'});
    }
});





module.exports = router;