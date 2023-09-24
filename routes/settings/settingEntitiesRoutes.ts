import express from "express";
import settingEntitiesController from "../../controllers/settings/SettingEntities.controller";

const settingEntitiesRoutes = express.Router();

settingEntitiesRoutes.get(
  "/settings/entities",
  settingEntitiesController.settingEntities
);

settingEntitiesRoutes.put(
  "/settings/entities/:entity_id/:settings_id",
  settingEntitiesController.updateEntities
);

export default settingEntitiesRoutes;
