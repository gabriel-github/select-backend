import mongoose, { Schema } from "mongoose";

const GoalSchema = new Schema({
  name: String,
  dateInit: String,
  dateFinal: String,
  goal: Number,
  type: String,
  goalData: [Number],
  created_at: {
    type: String,
    default: Date.now,
  },
});

const Goal = mongoose.model("Goal", GoalSchema);

export { Goal };
