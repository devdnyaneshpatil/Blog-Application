const express = require("express");
const BlogModel = require("../models/blog.model");
const auth = require("../middlewares/auth.middleware");

const blogRouter = express.Router();

// route for getting all the blogs
blogRouter.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json({ msg: blogs });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//route for creating a blog
blogRouter.post("/add", auth, async (req, res) => {
  const { title, desc, img, category } = req.body;
  try {
    const newBlog = new BlogModel({
      title,
      desc,
      img,
      category,
      user: req.userId,
    });
    newBlog.save();
    res.status(200).json({ msg: newBlog });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//route for updating the blog
blogRouter.patch("/update/:id", auth, async (req, res) => {
  const blogId = req.params.id;
  const payload = req.body;
  try {
    const blog = await BlogModel.findOne({ _id: blogId });
    const userIdInBlogDoc = blog.user;
    if (req.userId == userIdInBlogDoc) {
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        { _id: blogId },
        payload,
        { new: true }
      );
      res
        .status(200)
        .json({ msg: updatedBlog, message: "Blog has been updated" });
    } else {
      res.status(200).json({ msg: "Not Authorized!" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//route for delting the blog
blogRouter.delete("/delete/:id", auth, async (req, res) => {
  const blogId = req.params.id;
  try {
    const blog = await BlogModel.findOne({ _id: blogId });
    const userIdInBlogDoc = blog.user;
    if (req.userId == userIdInBlogDoc) {
      await BlogModel.findByIdAndDelete({ _id: blogId });
      res
        .status(200)
        .json({ msg:"Blog has been deleted" });
    } else {
      res.status(200).json({ msg: "Not Authorized!" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = blogRouter;
