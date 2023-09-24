import { Request, Response } from "express";
import { MenuTreeService } from "../../services/tree/menuTreeService";
import apiHandler from "../../utils/ApiHandler";

class TreeController {

    getTrees(req: Request, res: Response) {

        const tree = new MenuTreeService();

        apiHandler(tree.getTrees(req.headers.authorization as string, req.params.menu_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showTree(req: Request, res: Response) {

        const tree = new MenuTreeService();

        apiHandler(tree.showTree(req.headers.authorization as string, req.params.menu_id, req.params.tree_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    storeTree(req: Request, res: Response) {

        const tree = new MenuTreeService();

        apiHandler(tree.storeTree(req.body, req.headers.authorization as string, req.params.menu_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    updateTree(req: Request, res: Response) {

        const tree = new MenuTreeService();

        apiHandler(tree.updateTree(req.body, req.headers.authorization as string, req.params.menu_id, req.params.tree_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    destroyTree(req: Request, res: Response) {

        const tree = new MenuTreeService();

        apiHandler(tree.destroyTree(req.headers.authorization as string, req.params.menu_id, req.params.tree_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    sortTree(req: Request, res: Response) {

        const tree = new MenuTreeService();

        apiHandler(tree.sortTree(req.headers.authorization as string, req.params.menu_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    dashboardTree(req: Request, res: Response) {
        const tree = new MenuTreeService();

        apiHandler(tree.dashboardTree(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    treeMobile(req: Request, res: Response) {
        const tree = new MenuTreeService();

        apiHandler(tree.treeMobile(req.headers.authorization as string))
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

export default new TreeController();