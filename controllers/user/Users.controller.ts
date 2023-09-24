import { Request, Response } from "express";
import UserServices from "../../services/user/UserServices";
import apiHandler from "../../utils/ApiHandler";

class Users {
  getUsers(req: Request, res: Response) {
    const user = new UserServices();
    const { authorization } = req.headers;

    apiHandler(user.getUsers(authorization as string))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  showUser(req: Request, res: Response) {
    const user = new UserServices();
    const { authorization } = req.headers;

    apiHandler(user.showUser(authorization as string, req.params.user_id))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  storeUser(req: Request, res: Response) {
    const user = new UserServices();
    const { authorization } = req.headers;

    apiHandler(user.storeUser(authorization as string, req.body))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  updateUser(req: Request, res: Response) {
    const user = new UserServices();
    const { authorization } = req.headers;

    apiHandler(
      user.updateUser(authorization as string, req.body, req.params.user_id)
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

  deleteUser(req: Request, res: Response) {
    const user = new UserServices();
    const { authorization } = req.headers;

    apiHandler(user.deleteUser(authorization as string, req.params.user_id))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  blockUser(req: Request, res: Response) {
    const user = new UserServices();
    const { authorization } = req.headers;

    apiHandler(
      user.blockUser(authorization as string, req.body, req.params.user_id)
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

  sendOtp(req: Request, res: Response) {
    const user = new UserServices();
    const { authorization } = req.headers;

    apiHandler(
      user.sendOtp(authorization as string, req.body, req.params.user_id)
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

  verifyUser(req: Request, res: Response) {
    const user = new UserServices();
    const { authorization } = req.headers;

    apiHandler(user.verifyUser(authorization as string, req.params.user_id))
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

export default new Users();
