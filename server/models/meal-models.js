const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Meal = new Schema(
    {
    name: {type: String},
    // "sides": string,
    // "photo": string,
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
    instructions: [String]
}

    // {
    //     name: { type: String, required: true },
    //     time: { type: [String], required: true },
    //     rating: { type: Number, required: true },
    // },
    // { timestamps: true },
)


module.exports = mongoose.model('meals', Meal)