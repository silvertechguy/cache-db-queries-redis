require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const responseTime = require("response-time");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(responseTime());

app.use("/api/posts", require("./routes/post"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
