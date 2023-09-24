import { Request, Response } from "express";
import UserServices from "../../services/user/UserServices";
import apiHandler from "../../../utils/ApiHandler";
import AdminUserServices from "../../services/user/AdminUserService";

class AdminUsers {
  adminUsers(req: Request, res: Response) {
    const user = new AdminUserServices();
    const { authorization } = req.headers;

    apiHandler(user.adminUsers(authorization as string))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  showAdminUser(req: Request, res: Response) {
    const user = new AdminUserServices();
    const { authorization } = req.headers;

    apiHandler(user.showAdminUser(authorization as string, req.params.admin_id))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  storeAdminUser(req: Request, res: Response) {
    const user = new AdminUserServices();
    const { authorization } = req.headers;

    apiHandler(user.storeAdminUser(authorization as string, req.body))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  updateAdminUser(req: Request, res: Response) {
    const user = new AdminUserServices();
    const { authorization } = req.headers;

    apiHandler(
      user.updateAdminUser(
        authorization as string,
        req.body,
        req.params.admin_id
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

  deleteAdminUser(req: Request, res: Response) {
    const user = new AdminUserServices();
    const { authorization } = req.headers;

    apiHandler(
      user.deleteAdminUser(authorization as string, req.params.admin_id)
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

export default new AdminUsers();
