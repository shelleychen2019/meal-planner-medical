const express = require('express')

const MealCtrl = require('../controllers/meal-ctrl')

const router = express.Router()

//put tstatic routes on top so query routes don't get interfered?
router.get('/meals', MealCtrl.getMeals)
router.get('/favorites', MealCtrl.getMealsByFavorites)
router.post('/meal', MealCtrl.createMeal)
router.put('/meal/:id', MealCtrl.updateMeal)
router.delete('/meal/:id', MealCtrl.deleteMeal)
router.get('/meal/:id', MealCtrl.getMealById)
router.get('/meals/:cuisine', MealCtrl.getMealsByDiet)
router.put('/updatefav/:id', MealCtrl.updateFavorite)

//can connect to another collection with different controller
module.exports = router
