const Mongoose = require("mongoose");
const Joi = require("joi");
const Schema = Mongoose.Schema;

const postSchema = new Schema(
  {
    content: {
      type: String,
      min: 1,
      required: true,
    },
    authorName: {
      type: String,
      min: 1,
      max: 255,
    },
    authorID: {
      type: String,
      min: 1,
      required: true,
    },
  },
  { timestamps: { updatedAt: "updatedAt", createdAt: "createdAt" } }
);

const Post = Mongoose.model("post", postSchema);

const validatePost = (post) => {
  const schema = {
    content: Joi.string().min(1).required(),
    authorName: Joi.string().min(1).max(255),
    authorID: Joi.string().min(1).required(),
  };

  return Joi.validate(post, schema);
};

exports.Post = Post;
exports.validate = validatePost;
