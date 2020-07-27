const router = require('express').Router();
const db = require('../models');

//route to get last workout from the database
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

//creates a new workout
router.post('/workouts', (req, res) => {
	db.Workout
		.create({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// getWorkoutsInRange - this populates the graphs in /stats
router.get('/workouts/range', (req, res) => {
	db.Workout.find().populate('exercises').then((dbWorkout) => res.json(dbWorkout)).catch((err) => res.json(err));
});

//add an exercise to an existing workout
router.put('/workouts/:id', (req, res) => {
	console.log(req.body);
	db.Workout
		.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				$push: { exercises: req.body },
				$inc: { totalDuration: req.body.duration },
				new: true
			},
			(err, result) => {
				if (err) {
					res.send(err);
				} else {
					res.send(result);
				}
			}
		)
		.catch((err) => {
			console.log('err', err);
			res.json(err);
		});
});

module.exports = router;
