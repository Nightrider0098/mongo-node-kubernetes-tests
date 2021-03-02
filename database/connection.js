const dconfig = require("dotenv");
dconfig.config();
const mongoURI = process.env.MONGO_URI;

let mongoose = require("mongoose");
const { newsArticleSchema } = require("./schema");

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    console.log("error while connection", err);
  });
let newsArticleModel = mongoose.model("dailynews", newsArticleSchema);
newsArticleModel.insertMany([{ name: "Hitesh", number: Math.random() }]);

exports.newsArticleModel = newsArticleModel;
