import mongoose from 'mongoose';
const { Schema } = mongoose;

const MealSchema = new Schema({
  main: {
    type: String,
    maxlength: 50,
    required: true,
    enum: ['others', 'pasta', 'potatoes', 'rice'],
  },
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  ingredients: [String],
});

export default mongoose.model('Meal', MealSchema);
