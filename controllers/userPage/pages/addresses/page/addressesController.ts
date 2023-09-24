import { Request, Response } from "express";
import apiHandler from "../../../../../utils/ApiHandler";
import PagesAddressesServices from "../../../../../services/userPage/pages/addresses/page/addressesServices";

class AddressesController {

    getAddresses(req: Request, res: Response) {

        const addresses = new PagesAddressesServices();

        apiHandler(addresses.getAddresses(req.headers.authorization as string, req.params.page_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    createAddresses(req: Request, res: Response) {

        const addresses = new PagesAddressesServices();

        apiHandler(addresses.createAddresses(req.headers.authorization as string, req.params.page_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    showAddresses(req: Request, res: Response) {

        const addresses = new PagesAddressesServices();

        apiHandler(addresses.showAddresses(req.headers.authorization as string, req.params.page_id, req.params.addresse_id))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    updateAddresses(req: Request, res: Response) {

        const addresses = new PagesAddressesServices();

        apiHandler(addresses.updateAddresses(req.headers.authorization as string, req.params.page_id, req.params.addresse_id, req.body))
            .then((data) => {

                res.send(data);
                return data;
            })
            .catch((err) => {

                res.send(err);
                return err;
            });
    }
    deleteAddresses(req: Request, res: Response) {

        const addresses = new PagesAddressesServices();

        apiHandler(addresses.deleteAddresses(req.headers.authorization as string, req.params.page_id, req.params.addresse_id))
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

export default new AddressesController();