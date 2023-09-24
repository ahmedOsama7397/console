import { Request, Response } from "express";
import UserServices from "../../services/user/UserServices";
import apiHandler from "../../utils/ApiHandler";
import SettingServices from "../../services/settings/SettingServices";

class Settings {
  settings(req: Request, res: Response) {
    const settingService = new SettingServices();
    const { authorization } = req.headers;

    apiHandler(settingService.settings(authorization as string))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  updateSettings(req: Request, res: Response) {
    const settingService = new SettingServices();
    const { authorization } = req.headers;

    apiHandler(
      settingService.updateSettings(
        authorization as string,
        req.params.setting_id,
        req.body
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

export default new Settings();
