const express = require('express')

const MealCtrl = require('../controllers/meal-ctrl')

const router = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

//global path
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User model
const User = require("../models/users");

//setting this endpoint for register matures the router
router.post("/register", (req, res) => {
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//if user information foudn in database
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res.status(400).json({ email: "Email already exists" });
		} else {
			//if user information not in database, create a new user
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});

			// Hash password before saving in database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then(user => res.json(user))
						.catch(err => console.log(err));
				});
			});
		}
	});
});

router.post("/login", (req, res) => {
		//what our request will lead to
		const { errors, isValid } = validateLoginInput(req.body);
		if (!isValid) {
			return res.status(400).json(errors);
		}
		const email = req.body.email;
		const password = req.body.password;

		//Find user by email
		User.findOne({ email }).then(user => {
			//check if user exists
			if (!user) {
				return res.status(404).json({ emailnotfound: "Email not found" });
			}
		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			// User matched
			if (isMatch) {
				// Create JWT Payload
				const payload = {
					id: user.id,
					name: user.name
				};
				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{expiresIn: 31556926 // 1 year in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: "Password incorrect" });
			}
		});
	});
});

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
