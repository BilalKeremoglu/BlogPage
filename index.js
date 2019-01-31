const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express();

//Routes
const indexRoutes = require('./routes/indexRoutes'),
      adminRoutes = require('./routes/adminRoutes');


//App Config
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Routes using
app.use(indexRoutes);
app.use(adminRoutes);


//===================== Server ============================\\
const server = app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Sunucu portu: %d", server.address().port);
    }
});