const Meal = require('../models/meal-models')

createMeal = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recipe',
        })
    }

    const meal = new Meal(body)

    if (!meal) {
        return res.status(400).json({ success: false, error: err })
    }
    //defensive coding, not a great practice, why would !meal happen if we have body?

    meal
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: meal._id,
                message: 'meal created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'meal not created!',
            })
        })
}


	updateMeal = async (req, res) => { //this is express syntax
    const body = req.body //this req.body is mongoose syntax

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Meal.findOne({ _id: req.params.id }, (err, meal) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Not found!',
            })
        }
        meal.name = body.name
        meal.instructions = body.instructions
        meal.cuisine= body.cuisine

        meal
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: meal._id,
                    message: 'Updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Not updated!',
                })
            })
    })
}

deleteMeal = async (req, res) => {
	await Meal.findOneAndDelete({ _id: req.params.id }, (err, meal) => {
			if (err) {
					return res.status(400).json({ success: false, error: err })
			}

			if (!meal) {
					return res
							.status(404)
							.json({ success: false, error: `Meal not found 1` })
			}

			return res.status(200).json({ success: true, data: meal })
	}).catch(err => console.log(err))
}

getMealById = async (req, res) => {
	await Meal.findOne({ _id: req.params.id }, (err, meal) => {
			if (err) {
					return res.status(400).json({ success: false, error: err })
			}

			if (!meal) {
					return res
							.status(404)
							.json({ success: false, error: `Meal not found 2` })
			}
			return res.status(200).json({ success: true, data: meal })
	}).catch(err => console.log(err))
}

//query by diet
//export, ding ding ding
//typo
//not compiling
getMealsByDiet = async (req, res) => {
    // req.params.cuisine

    await Meal.find({cuisine: req.params.cuisine}, (err, meals) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!meals.length) {
            return res
                .status(404)
                .json({ success: false, error: `Meal not found 3` })
        }
        return res.status(200).json({ success: true, data: meals })
    }).catch(err => console.log(err))
}

getMealsByFavorites = async (req, res) => {
    await Meal.find({fav: true}, (err, meals) => {
        console.log('err: ', err)
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        console.log('from getMealsByFavorites on server', meals)
        // if (!meals.length) {
        //     // return []
        //     return res
        //         .status(404)
        //         .json({ success: false, error: `Meal not found` })
        // }
        return res.status(200).json({ success: true, data: meals })
    }).catch(err => console.log(err))
}

updateFavorite = async (req, res) => { //this is express syntax
    const body = req.body //this req.body is mongoose syntax

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Meal.findOne({ _id: req.params.id }, (err, meal) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Not found!',
            })
        }
        meal.fav = body.fav

        meal
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: meal._id,
                    message: 'Updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Not updated!',
                })
            })
    })
}
          
// getMealsByFavorites = async (req, res) => {
//     // console.log('jah'); //this shows up in the console
//     // return res.status(200).json({success:'jah'}) //shows up in postman
// 	await Meal.find({fav:true}, (err, meals) => {
// 			if (err) {
// 					return res.status(400).json({ success: false, error: err })
// 			}
// 			if (!meals.length) {
// 					return res
// 							.status(404)
// 							.json({ success: false, error: `Meal not found 5` })
// 			}
// 			return res.status(200).json({ success: true, data: meals })
// 	}).catch(err => console.log(err))
// }


getMeals = async (req, res) => {
    // console.log('jah'); //this shows up in the console
    // return res.status(200).json({success:'jah'}) //shows up in postman
	await Meal.find({}, (err, meals) => {
			if (err) {
					return res.status(400).json({ success: false, error: err })
			}
			if (!meals.length) {
					return res
							.status(404)
							.json({ success: false, error: `Meal not found 5` })
			}
			return res.status(200).json({ success: true, data: meals })
	}).catch(err => console.log(err))
}

module.exports = {
	createMeal,
	updateMeal,
	deleteMeal,
	getMeals,
    getMealById,
    getMealsByDiet,
    getMealsByFavorites,
    updateFavorite
}
