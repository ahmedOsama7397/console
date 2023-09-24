import express from "express";
import activitiesController from "../../../controllers/userPage/activities/activitiesController";
const activitiesRoutes = express.Router();

activitiesRoutes.get("/activities", activitiesController.getActivities);
activitiesRoutes.get("/activities/:activities_id", activitiesController.showActivities);

export default activitiesRoutes;
