const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model

const moviesSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    year: Number,
    director: String,
    duration: String,
    genre : Object,
    rate:{
        type: Number,
        min: 1,
        max: 10
    },
    poster:{
        type: String,
        required:true
    },
    description:String
})

const Movie = model("Movie", moviesSchema)

module.exports = Movie;

