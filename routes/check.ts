import express from "express";

const heathCheck = express.Router();

heathCheck.get("/check", (req, res) => {
  res.status(200).send("Health check run succsessfully");
});

export { heathCheck };
