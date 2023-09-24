import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import SettingListServices from "../../services/settings/SettingListServices";

class SettingList {
  settingList(req: Request, res: Response) {
    const settingListService = new SettingListServices();
    const { authorization } = req.headers;

    apiHandler(settingListService.settingList(authorization as string))
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

export default new SettingList();
