const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema(
    {
        position: {
            type: String,
            required: true,
        },
        whenApplied: {
            type: Date,
        },
        positionUrl: String,
        jobDetails: String,
        skillsRequired: String,
        skillsOptional: String,
        location: {
            type: String,
            enum: ['Remote', 'In-Person', 'Hybrid']
        },
        companyName: {
            type: String,
            required: true,
        },
        companyUrl: String,
        industry: String,
        companyDetails: String,
        user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        },
        website: {
            type: String,
            enum: ['linkedIn', 'Indeed', 'ZipRecruiter', 'Company website']
        },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Position", positionSchema);