import express from "express";
import settingEntitieTabsController from "../../controllers/settings/SettingEntitieTabs.controller";

const settingEntitieTabsRoutes = express.Router();

settingEntitieTabsRoutes.get(
  "/settings/entities/:entity_id/tabs",
  settingEntitieTabsController.settingEntitiesTabs
);

export default settingEntitieTabsRoutes;
