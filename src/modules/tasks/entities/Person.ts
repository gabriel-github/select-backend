import mongoose, { Schema } from "mongoose";

const PersonSchema = new Schema({
  name: String,
  information: [Number],
  created_at: {
    type: String,
    default: Date.now,
  },
});

const Person = mongoose.model("Person", PersonSchema);

export { Person };
