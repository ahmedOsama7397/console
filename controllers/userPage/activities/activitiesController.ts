import { Request, Response } from "express";
import ActivitiesServices from "../../../services/userPage/activities/activitiesService";
import apiHandler from "../../../utils/ApiHandler";

class ActivitiesController {

    getActivities(req: Request, res: Response) {

        const activities = new ActivitiesServices();

        apiHandler(activities.getActivities(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showActivities(req: Request, res: Response) {

        const activities = new ActivitiesServices();

        apiHandler(activities.showActivities(req.headers.authorization as string, req.params.activities_id))
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

export default new ActivitiesController();