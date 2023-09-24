import express from "express";

const errorRoute = express.Router();

errorRoute.get("*", function (req, res) {
  res.status(404).send("not found");
});

export { errorRoute };
