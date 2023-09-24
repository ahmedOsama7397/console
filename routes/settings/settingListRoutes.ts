import express from "express";
import settingListController from "../../controllers/settings/SettingList.controller";

const settingListRoutes = express.Router();

settingListRoutes.get("/settings/list", settingListController.settingList);

export default settingListRoutes;
