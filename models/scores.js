import mongoose from "mongoose";

const Schema = mongoose.Schema({
  teacher: {
    type: Object.Schema.Types.ObjectId,
    ref: "User"
  },
  session: {
    type: String,
    required: true
  },
  scoreA1: {
    type: Number
  },
  scoreA2: {
    type: Number
  },
  scoreA3: {
    type: Number
  },
  scoreA4: {
    type: Number
  },
});

export default mongoose.model("scores", scoresSchema);
