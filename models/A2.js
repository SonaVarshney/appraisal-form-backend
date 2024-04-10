import mongoose from "mongoose";

const resourcesProvidedSchema = new mongoose.Schema({
  teacher: {
    type: Object.Schema.Types.ObjectId,
    ref: "User",
  },
  session: {
    type: String,
    required: true,
  },
  course:{
    type:String,
    required: true
  },
  consultedResources:{
      type:String,
      required:true
    }
  ,
   prescribedResources:{
        type:String,
        required:true
      }
    ,
     additionalResources:{
          type:String,
          required:true
        }
});

export default mongoose.Schema("resourcesProvided", resourcesProvidedSchema);
