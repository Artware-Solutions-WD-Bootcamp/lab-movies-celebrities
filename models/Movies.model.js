//  Add your code here
const mongoose =require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Celebrity"  //Name of the other schema that references.
    }]
})

const MoviesModel = mongoose.model( "Movies", moviesSchema)

module.exports = MoviesModel;