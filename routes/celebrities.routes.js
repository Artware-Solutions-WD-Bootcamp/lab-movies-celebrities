const express = require('express');
const router = express.Router();
const Celeb = require('../models/Celebrity.model.js')


router.get('/', async (req, res, next) => {
    // Iteration #3: Add a new drone
    try{
        const celebList = await Celeb.find()
        res.render("celebrities/celebrities.hbs", {celebList})
    }catch(error){
        next(error);
    }

});


router.get('/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    res.render("celebrities/new-celebrity.hbs")
});

router.post('/create', async (req, res, next) => {
    // Iteration #3: Add a new drone
    try{
        const {name, occupation, catchPhrase} = req.body
        await Celeb.create({name, occupation, catchPhrase})
        res.redirect("/celeb/")
    }catch(error){
        res.redirect("/celeb/create")
    }

});




module.exports = router;