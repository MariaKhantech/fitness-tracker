const router = require('express').Router();
const db = require('../models');
const { Workout } = require('../models');

//route to get workouts from the database
router.get('/workouts', (req, res) => {
	db.Workout
		.find({})
		.then((workout) => {
			console.log(workout);
			res.json(workout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.post('/workouts', (req, res) => {
	db.Workout
		.create(req.body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;
