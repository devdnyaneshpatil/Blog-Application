const mongoose=require("mongoose")

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: String,
    img: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    category: String,
  },
  {
    timestamps: true,
  }
);

const BlogModel=mongoose.model("blog",blogSchema)

module.exports=BlogModel