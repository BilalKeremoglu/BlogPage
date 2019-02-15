const express = require('express'),
    User = require('../models/userModel'),
    passport = require('passport'),
    router = express.Router();

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/signin');
    }
}

router.get('/signin', (req, res) => {
    res.render('admin/signin');
});

//login
router.post('/signin', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/signin'
    }), (req, res) => {

    });

router.get('/signup',isLoggedIn, (req, res) => {
    res.render('admin/signup');
});
//deneme
//signup
router.post('/signup',isLoggedIn, (req, res) => {
    const newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/');
            });
        }
    });
});

let adminActions = [
    {
        actionId: 1,
        acitionName: "changeHomeImage",
        displayName: "Change Home Image"
    },
    {
        actionId: 2,
        acitionName: "changeAboutImage",
        displayName: "Change About Image"
    },
    {
        actionId: 3,
        acitionName: "changeAboutText",
        displayName: "Change About Text"
    },
    {
        actionId: 4,
        acitionName: "newPost",
        displayName: "Add New Post"
    },
    {
        actionId: 5,
        acitionName: "listAllBlogs",
        displayName: "List All Blogs"
    },
];

router.get('/admin', isLoggedIn, (req, res) => {
    res.render('admin/admin', { adminActions: adminActions });
});

//logout
router.get('/signout', (req, res) => {
    req.logout();
    res.redirect('/');
});


module.exports = router;
