import mongoose from "mongoose";

const courseMethodologySchema = new mongoose.Schema({
  teacher: {
    type: Object.Schema.Types.ObjectId,
    ref: "User",
  },
  session: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
});

export default mongoose.Schema("courseMethodology", courseMethodologySchema);
