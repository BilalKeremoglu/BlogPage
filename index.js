const express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    User = require('./models/userModel'),
    app = express();

//Routes
const indexRoutes = require('./routes/indexRoutes'),
      adminRoutes = require('./routes/adminRoutes'),
      blogRoutes = require('./routes/blogRoutes');


//App Config11
mongoose.connect('mongodb://localhost/BlogApp');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//Pasword Config
app.use(require("express-session")({
    secret: "Bu bir session express ugulamasıdır.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Share current user info within all routes.
app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
})

//Routes using
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);



//===================== Server ============================\\
const server = app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Sunucu portu: %d", server.address().port);
    }
});