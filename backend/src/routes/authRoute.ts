import express  from "express";

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  res.send("Login endpoint");
});

authRouter.post("/register", (req, res) => {
  res.send("Register endpoint");
});

export default authRouter;