const { Schema } = require("mongoose");

const newsArticleSchema = new Schema({
  name: String,
  number: Number,
});

exports.newsArticleSchema = newsArticleSchema;
