import mongoose from "mongoose";

const dpdpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
      company: {
        type: String,
        required: true
      },
      designation: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
      },
      mobileNumber: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, "Mobile number must be 10 digits"],
      },
      address: {
        type: String,
       },
      city: {
        type: String,
      },

      industry:{
        type: String,
      }

})

export const dpdp = mongoose.model("dpdp",dpdpSchema)