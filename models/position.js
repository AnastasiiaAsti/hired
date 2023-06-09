const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema(
    {
      status: {
        type: String,
        required: true,
        enum: [
            "applied",
            "first check-in",
            "second check-in",
            "1st interview - scheduled",
            "1st interview - passed",
            "2nd interview - scheduled",
            "2nd interview - passed",
            "3rd interview - scheduled",
            "3rd interview - passed",
            "4th interview - scheduled",
            "4th interview - passed",
            "offer",
            "not this time"
        ],
      }
    },
    {
      timestamps: true,
    }
  );

const positionSchema = new Schema(
    {
        position: {
            type: String,
            required: true,
        },
        whenApplied: {
            type: Date,
        },
        status: [statusSchema],
        positionUrl: [
          {
              type: String,
              validate: {
                  validator: function (value) {
                      const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
                      const urlRegExp = new RegExp(urlPattern);
                      return value.match(urlRegExp);
              },
                  message: props => `${props.value} is not a valid URL`
              }
          }
      ],
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
        companyUrl: [
          {
              type: String,
              validate: {
                  validator: function (value) {
                      const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
                      const urlRegExp = new RegExp(urlPattern);
                      return value.match(urlRegExp);
              },
                  message: props => `${props.value} is not a valid URL`
              }
          }
      ],
        industry: String,
        companyDetails: String,
        website: {
            type: String,
            enum: ['linkedIn', 'Indeed', 'ZipRecruiter', 'Company website']
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Position", positionSchema);