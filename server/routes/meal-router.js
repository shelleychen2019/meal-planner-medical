const express = require('express')

const MealCtrl = require('../controllers/meal-ctrl')

const router = express.Router()

router.post('/meal', MealCtrl.createMeal)
router.put('/meal/:id', MealCtrl.updateMeal)
router.delete('/meal/:id', MealCtrl.deleteMeal)
router.get('/meal/:id', MealCtrl.getMealById)
//query meals by diet parameter here, how to get meal by cuisine, error doesn't return a callback functon

//make a different url for new router path
router.get('/mealsearch/:cuisine', MealCtrl.getMealsByDiet)

router.get('/meals', MealCtrl.getMeals)

//can connect to another collection with different controller
module.exports = router
