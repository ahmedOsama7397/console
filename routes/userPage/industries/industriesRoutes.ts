import express from "express";
import industriesController from "../../../controllers/userPage/industries/industriesController";
const industriesRoutes = express.Router();

industriesRoutes.get("/industries", industriesController.getIndustries);
industriesRoutes.get("/industries/:industries_id", industriesController.showIndustries);

export default industriesRoutes;
