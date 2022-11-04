import mongoose, { Schema } from 'mongoose';

const WorkoutSchema = new mongoose.Schema({
  workoutName: {
    type: String,
    maxlength: 50,
  },
  ex1: {
    type: String,
    maxlength: 50,
  },
  ex2: {
    type: String,
    maxlength: 50,
  },
  ex3: {
    type: String,
    maxlength: 50,
  },
  ex4: {
    type: String,
    maxlength: 50,
  },
  ex5: {
    type: String,
    maxlength: 50,
  },
  ex6: {
    type: String,
    maxlength: 50,
  },
  ex7: {
    type: String,
    maxlength: 50,
  },
  ex8: {
    type: String,
    maxlength: 50,
  },
  difficulty: {
    type: String,
    maxlength: 50,
  },
});

export default mongoose.model('Workout', WorkoutSchema);
