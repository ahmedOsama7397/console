import { Request, Response } from "express";
import ActivitiesServices from "../../../services/userPage/badges/badgesService";
import apiHandler from "../../../utils/ApiHandler";
import BadgesServices from "../../../services/userPage/badges/badgesService";

class BadgeController {

    getBadges(req: Request, res: Response) {

        const badges = new BadgesServices();

        apiHandler(badges.getBadges(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    createBadges(req: Request, res: Response) {

        const badges = new BadgesServices();

        apiHandler(badges.createBadges(req.headers.authorization as string, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showBadges(req: Request, res: Response) {

        const badges = new BadgesServices();

        apiHandler(badges.showBadges(req.headers.authorization as string, req.params.badges_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    updateBadges(req: Request, res: Response) {
        const badges = new BadgesServices();

        apiHandler(badges.updateBadges(req.headers.authorization as string, req.params.badges_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    deleteBadges(req: Request, res: Response) {
        const badges = new BadgesServices();
        apiHandler(badges.deleteBadges(req.headers.authorization as string, req.params.badges_id))
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

export default new BadgeController();