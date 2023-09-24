import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import { GeoService } from "../../services/geo/GeoService";

class GeoController {

    getCountries(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.getCountries(req.params.country_id, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }


    updateCountry(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.updateCountry(req.params.country_id, req.body, req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    listActiveCountries(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.listActiveCountries(req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    listLanguage(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.listLanguages(req.params.country_id, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    createLanguage(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.createLanguages(req.params.country_id, req.body, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    updateLanguage(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.updateLanguages(req.params.country_id, req.body, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    deleteLanguage(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.deleteLanguages(req.params.country_id, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }

    listTranslation(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.listTranslation(req.params.country_id, req.params.lang_id, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    createTranslation(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.createTranslation(req.params.country_id, req.params.lang_id, req.body, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    updateTranslation(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.updateTranslation(req.params.country_id, req.params.lang_id, req.body, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    deleteTranslation(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.deleteTranslation(req.params.country_id, req.params.lang_id, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    importTranslation(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.importTranslation(req.body, req.headers.authorization as string))
            .then((data) => {
                res.send(data);
                return data;
            })
            .catch((err) => {
                res.send(err);
                return err;
            });
    }
    exportTranslation(req: Request, res: Response) {

        const geo = new GeoService();

        apiHandler(geo.exportTranslation(req.headers.authorization as string))
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

export default new GeoController();