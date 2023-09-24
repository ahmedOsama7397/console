import express from "express";

const welcomeRouter = express.Router();

welcomeRouter.post("/welcome", handleWelcome);

export { welcomeRouter };
