const Post = require("../../model/post");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
module.exports = {
  async createPost(req, res) {
    const content = req.body.content;
    if (!content.length) {
      return res.status(400).send({
        code: 400,
        status: "Please Enter content",
      });
    }
    try {
      const post = new Post({
        content: content,
        postedBy: req.body.postedBy,
        image: req.body.image,
      });
      post.save();
      return res.status(200).send({
        code: 200,
        status: "success",
        data: post,
      });
    } catch (error) {
      return res
        .status(422)
        .send({ code: 422, status: "failed", massage: error.massage });
    }
  },
  async uploadFile(req, res) {
    try {
      const result = await cloudinary.uploader.upload(req.files.image.path);
      return res.status(200).send({
        code: 200,
        status: "success",
        data: { url: result.secure_url, public_id: result.public_id },
      });
    } catch (error) {
      console.log(error);
      return res
        .status(422)
        .send({ code: 422, status: "failed", massage: error.massage });
    }
  },
  async editPost(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      return res.status(200).send({
        code: 200,
        status: "success",
        data: post,
      });
    } catch (error) {
      return res
        .status(422)
        .send({ code: 422, status: "failed", massage: error.massage });
    }
  },
  async deletePost(req, res) {
    try {
      const post = await Post.deleteOne({ _id: req.params._id });
      return res.status(200).send({
        code: 200,
        status: "success",
        data: post,
      });
    } catch (error) {
      return res
        .status(422)
        .send({ code: 422, status: "failed", massage: error.massage });
    }
  },
  async likePost(req, res) {
    try {
      
      const like = await Post.findByIdAndUpdate(
        req.params._id,
        {
          $addToSet: { likes: req.body._id },
        },
        { new: true }
      );
      return res.status(200).send({
        code: 200,
        status: "success",
        data: like,
      });
    } catch (error) {
      console.log(error);
      return res
      .status(422)
      .send({ code: 422, status: "failed", massage: error.massage });
    }
  },
  async unlikePost(req, res) {
    try {
      const unlike = await Post.findByIdAndUpdate(
        req.params._id,
        {
          $pull: { likes: req.body._id },
        },
        { new: true }
      );
      return res.status(200).send({
        code: 200,
        status: "success",
        data: unlike,
      });
    } catch (error) {
      console.log(error);
      return res
      .status(422)
      .send({ code: 422, status: "failed", massage: error.massage });
    }
  },
  async getAllPost(req, res){
    try {
      const posts = await Post.find({});
      return res.status(200).send({
        code: 200,
        status: "success",
        data: posts,
      });
    } catch (error) {
      console.log(error);
      return res
      .status(422)
      .send({ code: 422, status: "failed", massage: error.massage });
    }
  }
};
