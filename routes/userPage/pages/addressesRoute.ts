import express from "express";
import industriesController from "../../../controllers/userPage/industries/industriesController";
import pageController from "../../../controllers/userPage/page/pageController";
import addressesController from "../../../controllers/userPage/pages/addresses/page/addressesController";
const addressesRoute = express.Router();

addressesRoute.get("/:page_id/addresses", addressesController.getAddresses)
addressesRoute.post("/:page_id/addresses", addressesController.createAddresses)
addressesRoute.get("/:page_id/addresses/:addresse_id", addressesController.showAddresses)
addressesRoute.put("/:page_id/addresses/:addresse_id", addressesController.updateAddresses)
addressesRoute.delete("/:page_id/addresses/:addresse_id", addressesController.deleteAddresses)
// Badge
export default addressesRoute;
