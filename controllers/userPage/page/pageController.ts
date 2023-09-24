import { Request, Response } from "express";
import apiHandler from "../../../utils/ApiHandler";
import IndustriesServices from "../../../services/userPage/industries/industriesService";
import PageServices from "../../../services/userPage/page/pageServices";

class PageController {

    // ================================ Activities ================================
    getActivities(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.getActivities(req.headers.authorization as string, req.params.page_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    updateActivities(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.updateActivities(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }


    // ================================ Badges ================================

    createBadges(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.createBadges(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    // ================================ Categories ================================
    getCategories(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.getCategories(req.headers.authorization as string, req.params.page_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    updateCategories(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.updateCategories(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    // ================================ Emails ================================
    getEmails(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.getEmails(req.headers.authorization as string, req.params.page_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    updateEmails(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.updateEmails(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    deleteEmail(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.deleteEmail(req.headers.authorization as string, req.params.page_id, req.params.email_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    // ================================ industries ================================
    getIndustries(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.getIndustries(req.headers.authorization as string, req.params.page_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    updateIndustries(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.updateIndustries(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    // ================================ links ================================
    getLinks(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.getLinks(req.headers.authorization as string, req.params.page_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    createLink(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.createLink(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    deleteLink(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.deleteLink(req.headers.authorization as string, req.params.page_id, req.params.link_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    // ================================ phone ================================
    getPhonse(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.getPhonse(req.headers.authorization as string, req.params.page_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    createPhone(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.createPhone(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    deletePhone(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.deletePhone(req.headers.authorization as string, req.params.page_id, req.params.phone_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    // ================================ phone ================================
    getWorkHourse(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.getWorkHourse(req.headers.authorization as string, req.params.page_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    createWorkHourse(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.createWorkHourse(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    deleteWorkHourse(req: Request, res: Response) {

        const page = new PageServices();

        apiHandler(page.deleteWorkHourse(req.headers.authorization as string, req.params.page_id))
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

export default new PageController();