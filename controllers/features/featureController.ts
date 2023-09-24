import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import { FeatureService } from "../../services/features/featureService";

class featureController {

    getFeatures(req: Request, res: Response) {

        const feature = new FeatureService();

        apiHandler(feature.getFeatures(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showFeature(req: Request, res: Response) {

        const feature = new FeatureService();

        apiHandler(feature.showFeature(req.headers.authorization as string, req.params.feature_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    storeFeature(req: Request, res: Response) {

        const feature = new FeatureService();

        apiHandler(feature.storeFeature(req.body, req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    updateFeature(req: Request, res: Response) {

        const feature = new FeatureService();

        apiHandler(feature.updateFeature(req.body, req.headers.authorization as string, req.params.feature_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    destroyFeature(req: Request, res: Response) {

        const feature = new FeatureService();

        apiHandler(feature.destroyFeature(req.headers.authorization as string, req.params.feature_id))
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

export default new featureController();