import express from "express";
import badgesController from "../../../controllers/userPage/badges/badgesController";
const badgesRoutes = express.Router();

badgesRoutes.get("/badges", badgesController.getBadges);
badgesRoutes.post("/badges", badgesController.createBadges);
badgesRoutes.put("/badges/:activities_id", badgesController.updateBadges);
badgesRoutes.delete("/badges/:activities_id", badgesController.deleteBadges);

export default badgesRoutes;
