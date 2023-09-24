import express from "express";
import userController from "../../controllers/user/Users.controller";
const userRoutes = express.Router();

userRoutes.get("/users", userController.getUsers);
userRoutes.get("/users/:user_id", userController.showUser);
userRoutes.post("/users", userController.storeUser);
userRoutes.put("/users/:user_id", userController.updateUser);
userRoutes.delete("/users/:user_id", userController.deleteUser);

//user actions routes
userRoutes.put("/users/:user_id", userController.blockUser);
userRoutes.post("/users/resend-otp/:user_id", userController.sendOtp);
userRoutes.get("/users/verify-user/:user_id", userController.verifyUser);

export default userRoutes;
