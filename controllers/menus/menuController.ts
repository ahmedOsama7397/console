import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import { MenuService } from "../../services/menus/menuService";

class menuController {

    getMenus(req: Request, res: Response) {

        const menu = new MenuService();

        apiHandler(menu.getMenus(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showMenu(req: Request, res: Response) {

        const menu = new MenuService();

        apiHandler(menu.showMenu(req.headers.authorization as string, req.params.menu_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    storeMenu(req: Request, res: Response) {

        const menu = new MenuService();

        apiHandler(menu.storeMenu(req.body, req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    updateMenu(req: Request, res: Response) {

        const menu = new MenuService();

        apiHandler(menu.updateMenu(req.body, req.headers.authorization as string, req.params.menu_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    destroyMenu(req: Request, res: Response) {

        const menu = new MenuService();

        apiHandler(menu.destroyMenu(req.headers.authorization as string, req.params.menu_id))
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

export default new menuController();