import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import SettingEntitieServices from "../../services/settings/SettingEntitieServices";
import SettingEntitieTabsServices from "../../services/settings/SettingEntitieTabs";

class SettingEntitiesTabs {
  settingEntitiesTabs(req: Request, res: Response) {
    const settingEntitiesTabsService = new SettingEntitieTabsServices();
    const { authorization } = req.headers;

    apiHandler(
      settingEntitiesTabsService.settingEntitiesTabs(
        authorization as string,
        req.params.entity_id
      )
    )
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }
}

export default new SettingEntitiesTabs();
