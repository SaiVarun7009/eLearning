const { default: mongoose } = require("mongoose");
const { type } = require("os");

const newsSchema = new mongoose.Schema({
    image:String
});

const news = new mongoose.model("News", newsSchema);

module.exports = news;