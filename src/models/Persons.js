import mongoose, { Schema } from "mongoose";

const PersonsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  email: { type: String },
  phoneNo: { type: String },
  dateOfBirth: { type: Date },
  birthPlace: { type: String }
});

export default mongoose.models.Persons ||
  mongoose.model("Persons", PersonsSchema);
