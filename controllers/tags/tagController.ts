import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import { TagService } from "../../services/tags/tagService";

class tagController {

    getTags(req: Request, res: Response) {

        const tag = new TagService();

        apiHandler(tag.getTags(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showTag(req: Request, res: Response) {

        const tag = new TagService();

        apiHandler(tag.showTag(req.headers.authorization as string, req.params.tag_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    storeTag(req: Request, res: Response) {

        const tag = new TagService();

        apiHandler(tag.storeTag(req.body, req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    updateTag(req: Request, res: Response) {

        const tag = new TagService();

        apiHandler(tag.updateTag(req.body, req.headers.authorization as string, req.params.tag_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    destroyTag(req: Request, res: Response) {

        const tag = new TagService();

        apiHandler(tag.destroyTag(req.headers.authorization as string, req.params.tag_id))
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

export default new tagController();