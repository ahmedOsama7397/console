import express from "express";
import categoriesController from "../../../controllers/userPage/categories/categoriesController";
const categoriesRoutes = express.Router();

categoriesRoutes.get("/categories", categoriesController.getCategories);
categoriesRoutes.get("/categories/:categories_id", categoriesController.showCategories);

export default categoriesRoutes;
