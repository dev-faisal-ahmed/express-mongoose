const express = require("express");
const cors = require("cors");
const { userRouter } = require("./src/routes/user/user-route");

const app = express();

// parser
app.use(express.json());
app.use(cors());

// routes
app.use("/auth", userRouter);

app.get("/", async (_, res) => {
  res.status(200).json({ message: "Hello to my server" });
});

module.exports = { app };
