import mongoose from "mongoose";

const internshipStudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
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

    city: {
      type: String,
     },

    state: {
      type: String,
     },

    college: {
      type: String,
      required: true,
    },

    course: {
      type: String,
    },

    currentYearOrSemester: {
      type: String,
    },
  },
  { timestamps: true }
);

const internshipStudentModel = mongoose.model("internshipStudent", internshipStudentSchema)

export default internshipStudentModel;