import mongoose from "mongoose";

const dutiesAssignedSchema = new mongoose.Schema({
  teacher: {
    type: Object.Schema.Types.ObjectId,
    ref: "User",
  },
  session: {
    type: String,
    required: true,
  },
  dutyType: {
    type: String,
    required: true,
  },
  dutiesAssigned: {
    required: true,
    
  },
  date: {
    type: Date,
    required:true
  }
});

export default mongoose.Schema("dutiesAssigned", dutiesAssignedSchema);
