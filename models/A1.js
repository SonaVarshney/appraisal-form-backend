import mongoose from "mongoose";

const classesTakenSchema = new mongoose.Schema({
  teacher: {
    type: Object.Schema.Types.ObjectId,
    ref: "User",
  },
  session: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true
  },
  level: {
    type: String,
    default: "UG",
    enum: ["UG", "PG"],
    required: true
  },
  semester: {
    type: String,
    default: "Even",
    enum: ["Even", "Odd"],
    required: true,
  },
  TeachingMode: {
    type: String,
    default:"L",
    enum: ["L", "P"],
    required: true,
  },
  numClassAlloted: {
    type: Number,
    default: 0,
    required: true,
  },
  classesTaken: {
    type: Number,
    default: 0,
    required: true,
  },
  attendanceRecord: {
    type: String,
    required: true,
  },
});

export default mongoose.model("classesTaken", classesTakenSchema);
