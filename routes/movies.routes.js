const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies.model.js')
const Celeb = require("../models/Celebrity.model");


router.get('/', async (req, res, next) => {
    // Iteration #3: Add a new drone
    try{
        const moviesList = await Movies.find().populate("cast")
        res.render("movies/movies.hbs", {moviesList})
    }catch(error){
        next(error);
    }

});

router.get('/detail/:id', async (req, res, next) => {
    try{
        const { id } = req.params
        const movieQuery = await Movies.findById(id).populate("cast")
        res.render("movies/movie-details.hbs", {movieQuery})
    }catch(error){
        next(error);
    }
});

router.get('/:id/edit', async (req, res, next) => {
    try{
        const { id } = req.params
        const movieQuery = await Movies.findById(id)
        const celebList = await Celeb.find()
        res.render("movies/edit-movie.hbs", {movieQuery, celebList})
    }catch(error){
        next(error);
    }
});

router.post('/:id/edit', async (req, res, next) => {
    try{
        const { id } = req.params
        const {title, genre, plot, cast} = req.body
        await Movies.findByIdAndUpdate(id,{title, genre, plot, cast})
        res.redirect(`/movies/detail/${id}`)
    }catch(error){
        next(error);
    }
});



router.post('/:id/delete', async (req, res, next) => {
    try{
        const { id } = req.params
        await Movies.findByIdAndDelete(id)
        res.redirect("/movies/")
    }catch(error){
        next(error);
    }
});


router.get('/create', async (req, res, next) => {
    try{
        const celebList = await Celeb.find()
        res.render("movies/new-movie.hbs", {celebList})

    }catch(error){
        next(error)
    }

});

router.post('/create', async (req, res, next) => {

    try{
        const {title, genre, plot, cast} = req.body
        await Movies.create({title, genre, plot, cast})
        console.log("Entry Created")
        res.redirect("/movies/")
    }catch(error){
        console.log(error)
        res.redirect("/movies/create")
    }

});


module.exports = router;