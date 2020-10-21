//file based node module
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Meal = new Schema(
    {
    idMeal: {type: String},
    name: {type: String},
    // "sides": string,
    picture: {type: String},
    main_ingredient: {type: String},
    // main_ing: {type: String},
    cuisine: {type: String},
    // "time": [
    //   "min": integer,
    //   "max": integer
    // ],
    // "servings": integer,
    // "ingredients": [
    //   {
    //     "name": string,
    //     "quantity": string
    //   }, 
    // ...
    // ],
    video: [String], 
    instructions: [String],
    fav: {type: Boolean}
}

    // {
    //     name: { type: String, required: true },
    //     time: { type: [String], required: true },
    //     rating: { type: Number, required: true },
    // },
    // { timestamps: true },
)


module.exports = mongoose.model('meals', Meal)
