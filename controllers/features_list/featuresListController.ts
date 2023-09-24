import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import { FeatureListService } from "../../services/features_list/featureListService";

class featureListController {

    getFeaturesList(req: Request, res: Response) {

        const feature_list = new FeatureListService();

        apiHandler(feature_list.getFeaturesList(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showFeatureList(req: Request, res: Response) {

        const feature_list = new FeatureListService();

        apiHandler(feature_list.showFeatureList(req.headers.authorization as string, req.params.feature_list_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    storeFeatureList(req: Request, res: Response) {

        const feature_list = new FeatureListService();

        apiHandler(feature_list.storeFeatureList(req.body, req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    updateFeatureList(req: Request, res: Response) {

        const feature_list = new FeatureListService();

        apiHandler(feature_list.updateFeatureList(req.body, req.headers.authorization as string, req.params.feature_list_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    destroyFeatureList(req: Request, res: Response) {

        const feature_list = new FeatureListService();

        apiHandler(feature_list.destroyFeatureList(req.headers.authorization as string, req.params.feature_list_id))
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

export default new featureListController();