import { Request, Response } from "express";
import ActivitiesServices from "../../../services/userPage/badges/badgesService";
import apiHandler from "../../../utils/ApiHandler";
import BadgesServices from "../../../services/userPage/badges/badgesService";
import CategoriesServices from "../../../services/userPage/categories/categoriesService";
import IndustriesServices from "../../../services/userPage/industries/industriesService";

class IndustriesController {

    getIndustries(req: Request, res: Response) {

        const industries = new IndustriesServices();

        apiHandler(industries.getIndustries(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }


    showIndustries(req: Request, res: Response) {

        const industries = new IndustriesServices();

        apiHandler(industries.showIndustries(req.headers.authorization as string, req.params.industries_id))
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

export default new IndustriesController();