const Mongoose = require("mongoose");
const Joi = require("joi");
const Schema = Mongoose.Schema;

const issueSchema = new Schema(
  {
    id: {
      type: Mongoose.Types.ObjectId,
    },
    closedDate: {
      type: Date,
      default: Date.now(),
    },
    issueCategory: {
      type: String,
      min: 1,
      max: 30,
      required: true,
    },
    team: {
      type: String,
      min: 4,
      max: 50,
      required: true,
    },
    status: {
      type: String,
      min: 1,
      max: 8,
      required: true,
    },
    reporter: {
      type: String,
      min: 1,
      required: true,
    },
  },
  { timestamps: { updatedAt: "updatedAt", createdAt: "openedDate" } }
);

const Issue = Mongoose.model('issue', issueSchema)

const validateIssue = issue => {
    const schema = {
      issueCategory: Joi.string()
        .min(1)
        .max(30)
        .required(),
      team: Joi.string().min(4).max(50).required(),
      status: Joi.string().min(1).max(8).required(),
      closedDate: Joi.date.format('YYYY-MM-DD'),
      reporter: Joi.string()
        .min(1)
        .max(255)
        .required()
    }
  
    return Joi.validate(issue, schema)
  }
  
  exports.Issue = Issue
  exports.validate = validateIssue
