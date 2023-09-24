import { Request, Response } from "express";
import apiHandler from "../../../utils/ApiHandler";
import { entityService } from "../../../services/types/entities/entityService";

class EntityController {

    getEntities(req: Request, res: Response) {

        const entity = new entityService();

        apiHandler(entity.getEntities(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showEntity(req: Request, res: Response) {

        const entity = new entityService();

        apiHandler(entity.showEntity(req.headers.authorization as string, req.params.entity_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    storeEntity(req: Request, res: Response) {

        const entity = new entityService();

        apiHandler(entity.storeEntity(req.body, req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    updateEntity(req: Request, res: Response) {

        const entity = new entityService();

        apiHandler(entity.updateEntity(req.body, req.headers.authorization as string, req.params.entity_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    destroyEntity(req: Request, res: Response) {

        const entity = new entityService();

        apiHandler(entity.destroyEntity(req.headers.authorization as string, req.params.entity_id))
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

export default new EntityController();