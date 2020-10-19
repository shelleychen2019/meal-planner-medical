const express = require('express')

const MealCtrl = require('../controllers/meal-ctrl')

const router = express.Router()

router.post('/meal', MealCtrl.createMeal)
router.put('/meal/:id', MealCtrl.updateMeal)
router.delete('/meal/:id', MealCtrl.deleteMeal)
router.get('/meals', MealCtrl.getMeals)
router.get('/meal/:id', MealCtrl.getMealById)
router.get('/mealsearch/:cuisine', MealCtrl.getMealsByDiet)
router.get('/favorites', MealCtrl.getMealsByFavorites)
//mealsearch makes the favorites route interfere with the diet route
//can connect to another collection with different controller
module.exports = router
