import { Request, Response } from "express";
import { adService } from "../../../services/types/ads/adService";
import apiHandler from "../../../utils/ApiHandler";

class AdController {

    getAds(req: Request, res: Response) {

        const ad = new adService();

        apiHandler(ad.getAds(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    showAd(req: Request, res: Response) {

        const ad = new adService();

        apiHandler(ad.showAd(req.headers.authorization as string, req.params.ad_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    storeAd(req: Request, res: Response) {

        const ad = new adService();

        apiHandler(ad.storeAd(req.body, req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    updateAd(req: Request, res: Response) {

        const ad = new adService();

        apiHandler(ad.updateAd(req.body, req.headers.authorization as string, req.params.ad_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }

    destroyAd(req: Request, res: Response) {

        const ad = new adService();

        apiHandler(ad.destroyAd(req.headers.authorization as string, req.params.ad_id))
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

export default new AdController();