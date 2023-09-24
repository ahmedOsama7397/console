import { Router, Request, Response, NextFunction } from "express";
import { AuthAdminServices } from "../../services/auth/AuthAdminService";
import apiHandler from "../../utils/ApiHandler";

class AdminAuthController {
  adminLogin(req: Request, res: Response, next: NextFunction) {
    const admin = new AuthAdminServices();

    apiHandler(admin.adminLogin(req.body))
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

export default new AdminAuthController();
