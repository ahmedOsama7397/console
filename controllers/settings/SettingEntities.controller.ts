import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import SettingEntitieServices from "../../services/settings/SettingEntitieServices";

class SettingEntities {
  settingEntities(req: Request, res: Response) {
    const settingEntitiesService = new SettingEntitieServices();
    const { authorization } = req.headers;

    apiHandler(settingEntitiesService.settingEntities(authorization as string))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  updateEntities(req: Request, res: Response) {
    const settingEntitiesService = new SettingEntitieServices();
    const { authorization } = req.headers;

    apiHandler(
      settingEntitiesService.updateEntities(
        authorization as string,
        req.params.entity_id,
        req.params.setting_id
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

export default new SettingEntities();
