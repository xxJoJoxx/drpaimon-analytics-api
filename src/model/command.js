const Mongoose = require("mongoose");
const Joi = require("joi");
const Schema = Mongoose.Schema;

const commandSchema = new Schema(
    {
      commandPrefix: {
        type: String,
        min: 1,
        required: true,
      },
      commandSubject: {
        type: String,
        min: 1,
        required: true,
      },
      issuer: {
        type: String,
        min: 1,
        max: 255,
        required: true,
      },
    },
    { timestamps: { createdAt: "createdAt" } }
  );
  
  const Command = Mongoose.model("command", commandSchema);
  
  const validateCommand = (command) => {
    const schema = {
      commandPrefix: Joi.string().min(1).required(),
      commandSubject: Joi.string().min(1).required(),
      issuer: Joi.string().min(1).max(255).required(),
    };
  
    return Joi.validate(command, schema);
  };
  
  exports.Command = Command;
  exports.validate = validateCommand;