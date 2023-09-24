import express from "express";
import settingsController from "../../controllers/settings/Settings.controller";
const settingsRoutes = express.Router();

settingsRoutes.get("/settings", settingsController.settings);
settingsRoutes.put("/settings/:setting_id", settingsController.updateSettings);

export default settingsRoutes;
