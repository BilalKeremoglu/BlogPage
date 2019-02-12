const express = require('express'),
    Blog = require('../models/blogModel'),
    router = express.Router();

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/signin');
    }
}

router.get('/newPost', isLoggedIn, (req, res) => {
    res.render('blog/newPost');
});

router.post('/newPost', isLoggedIn , (req, res) => {
    //ajax ile çektiğimiz verileri server side da alma
    let blogTitle = req.body.data.blogTitle,
        comSentence = req.body.data.comSentence,
        comImage = req.body.data.comImage,
        blog = req.body.data.blog;

    let newBlog = {
        title: blogTitle,
        comSentences: comSentence,
        comImage: comImage,
        blog: blog
    }

    //postu db'ye kayıt etme
    Blog.create(newBlog)
        .then((newBlog) => {
            console.log(newBlog);
            res.status(201).json(newBlog);
        })
        .catch((err) => {
            console.log("==============HATA VAR============");
            console.log(err);
            res.send(err);
        })

});

router.get('/blogs/:blogId', (req, res) => {
    Blog.findById(req.params.blogId)
        .then((foundBlog) => {
            //res.json(foundBlog);
            res.render('blog/showBlog', { foundBlog: foundBlog });
        })
        .catch((err) => {
            console.log("==============HATA VAR============");
            console.log(err);
            res.send(err);
        });
});

//testing route da db deki blogları json formatında ön tarafa göderiyoruz.

router.get('/testing', (req, res) => {
    Blog.find()
        .then((foundBlogs) => {
            res.json(foundBlogs);
        })
        .catch((err) => {
            console.log("==============HATA VAR============");
            console.log(err);
            res.send(err);
        });
});

module.exports = router;
