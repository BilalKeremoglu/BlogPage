const express = require('express'),
    router = express.Router();

router.get('/signin', (req, res) => {
    res.render('admin/signin');
});

router.post('/signin"',(req,res)=>{

});

router.get('/signup',(req,res)=>{
    res.render('admin/signup');
});

router.post('/signup"',(req,res)=>{

});


module.exports = router;
