const router = require('express').Router()
const { Workout } = require('../models')

// Get all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// Create a new workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// Add exercises
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// View workout 
router.get('/workouts/range', (req, res) => {
  Workout.find().limit(7)
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

module.exports = router