import mongoose from "mongoose";

const ifHouseCommitteeSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  subtitle:{
    type:String,
    required:true,
  },
  body: {
    type: String,
    required: true,
  },
  image:{
    type: [String],
    required:true,
  },
},{timestamps:true});


export default ifHouseCommitteeSchema;