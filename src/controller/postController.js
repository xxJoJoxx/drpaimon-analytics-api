const { Post, validate } = require("../model/post");

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post)
    return res
      .status(404)
      .send("Post with the given with the given id  was not found");

  res.send(post);
};

exports.getPosts = async (req, res) => {
    const post = await Post.find().limit(10);
    if (!post)
      return res
        .status(404)
        .send("No Posts were found");
  
    res.send(post);
  };

exports.createPost = async (req, res) => {
  const { error } = validate(req.body);

  //If there is an error return a response with proper status code
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const post = new Post({
    content: req.content,
    authorName: req.authorName,
    authorID: req.authorID,
  });
  await post
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
