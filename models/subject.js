import mongoose from "mongoose"; 

const subjectSchema = mongoose.Schema({
  course: {
    type: String, 
  }, 
  dept:{
     type: String, 
  },
  sem: {
    type: Number
  }, 
  year: {
    type: Number, 
  }, 
  code: {
    type: String, 
  }, 
  name: {
    type: String 
  }
})

export default mongoose.model("subject", subjectSchema); 