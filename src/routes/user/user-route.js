const { Router } = require("express");
const { UserModel } = require("../../model/user-model");

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const user = await UserModel.create(userData);
    res.status(400).json({ message: "User Created", data: user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = { userRouter };
