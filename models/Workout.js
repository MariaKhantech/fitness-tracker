const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now
	},
	// excercises: [
		// {
		// 	type: Schema.Types.ObjectId,
		// 	ref: 'Excercise'
		// }
	// 	(type: {
	// 		type: String,
	// 		trim: true
	// 	}),
	// 	(name: {
	// 		type: String,
	// 		trim: true,
	// 		required: 'Enter a workout'
	// 	}),
	// 	(duration: {
	// 		type: Number
	// 	}),
	// 	(weight: {
	// 		type: Number
	// 	}),
	// 	(reps: {
	// 		type: Number
	// 	}),
	// 	(sets: {
	// 		type: Number
	// 	})
	// ]
// });

// const Workout = mongoose.model('Workout', workoutSchema);

// module.exports = Workout;
