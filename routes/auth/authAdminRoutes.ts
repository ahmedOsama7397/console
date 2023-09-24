import express from "express";
import adminAuthController from "../../controllers/auth/admin.auth.controller";
import Logger from "../../middelware/logger";
// const authenticate = require("../middelware/token");

const authAdminRoute = express.Router();

authAdminRoute.post("/admin/login", adminAuthController.adminLogin);

export { authAdminRoute };
