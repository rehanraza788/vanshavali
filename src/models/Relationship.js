import mongoose from "mongoose";

const RelationshipSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Persons",
      required: true
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Persons",
      required: true
    },
    relation: {
      type: String,
      enum: [
        "FATHER",
        "MOTHER",
        "SON",
        "BROTHER",
        "DAUGHTER",
        "HUSBAND",
        "WIFE"
      ],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.models.Relationship ||
  mongoose.model("Relationship", RelationshipSchema);
