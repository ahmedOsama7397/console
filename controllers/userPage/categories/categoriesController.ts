import { Request, Response } from "express";
import ActivitiesServices from "../../../services/userPage/badges/badgesService";
import apiHandler from "../../../utils/ApiHandler";
import BadgesServices from "../../../services/userPage/badges/badgesService";
import CategoriesServices from "../../../services/userPage/categories/categoriesService";

class CategoriesController {

    getCategories(req: Request, res: Response) {

        const categories = new CategoriesServices();

        apiHandler(categories.getCategories(req.headers.authorization as string))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }


    showCategories(req: Request, res: Response) {

        const categories = new CategoriesServices();

        apiHandler(categories.showCategories(req.headers.authorization as string, req.params.categories_id))
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

export default new CategoriesController();