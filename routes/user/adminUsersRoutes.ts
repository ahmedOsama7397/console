import express from "express";
import adminUserController from "../../controllers/user/AdminUsers.controller";
// import Logger from "../../middelware/logger";

const adminUserRoutes = express.Router();

adminUserRoutes.get("/users/admins", adminUserController.adminUsers);

adminUserRoutes.get(
  "/users/admins/:admin_id",
  adminUserController.showAdminUser
);

adminUserRoutes.post("/users/admins", adminUserController.storeAdminUser);

adminUserRoutes.put(
  "/users/admins/:admin_id",
  adminUserController.updateAdminUser
);

adminUserRoutes.delete(
  "/users/admins/:admin_id",
  adminUserController.deleteAdminUser
);

export default adminUserRoutes;
