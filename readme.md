const dutiesAssignedSchema = new mongoose.Schema({
  dutyType: {  -> enum of exam/admission
    type: String,
    required: true,
  },
  dutiesAssigned: { -> type?
    required: true,

  },
  date: {
    type: String,
    required: true,
  },
});


score table separately or in same table?
also api score individual?


// links as resources / pdfs
const resourcesProvidedSchema = new mongoose.Schema({
  course:{
    type:String,
    required: true
  },
  consultedResources:[
    link:{
      type:String,
      required:true
    }
  ],
   prescribedResources:[
      link:{
        type:String,
        required:true
      }
    ],
     additionalResources:[
        link:{
          type:String,
          required:true
        }
      ]
});


//dropdown






// make patch request for scores of otehr catgory later 