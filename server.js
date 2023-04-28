require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConn");

const app = express();

const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/user", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
