const express = require('express'),
    router = express.Router();

let data = [
    {
        postTitle:"Birinci Başlık",
        postSubTitle:"Birincinin Alt Başlığı",
        image:"https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_1280.jpg"
    },
    {
        postTitle:"İkinci Başlık",
        postSubTitle:"İkincinin Alt Başlığı",
        image:"https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149_1280.jpg"
    },
    {
        postTitle:"Üçüncü Başlık",
        postSubTitle:"Üçüncünün Alt Başlığı",
        image:"https://cdn.pixabay.com/photo/2018/12/04/22/38/road-3856796_1280.jpg"
    }
]

router.get('/', (req, res) => {
    res.render('home',{data : data});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});

router.get('/resume',(req,res)=>{
    res.render('resume')
});


module.exports = router;