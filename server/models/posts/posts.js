const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    trim: true,
  },
  professor: {
    type: String,
    trim: true,
  },
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
