const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//config Express App
const app = express();
app.use(cors());
app.use(express.json());

//config PORT
const port = process.env.PORT || 8080;

//config MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB connection has been established!")
);

//config routes
const articlesRouter = require("./routes/articles");
app.use(`/articles`, articlesRouter);

//Host app at PORT
app.listen(port, () => console.log(`Server is running at PORT ${port}!`));
