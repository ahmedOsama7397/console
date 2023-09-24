import express from "express";
import productPlatformController from "../../controllers/products/ProductsPlatform.controller";

const productsPlatfromRoutes = express.Router();

productsPlatfromRoutes.get(
  "/platform",
  productPlatformController.productPlatform
);

productsPlatfromRoutes.get(
  "/platform/:platform_id",
  productPlatformController.showProductPlatform
);

productsPlatfromRoutes.post(
  "/platform",
  productPlatformController.storeProductPlatform
);

productsPlatfromRoutes.put(
  "/platform/:platform_id",
  productPlatformController.updateProductPlatform
);

productsPlatfromRoutes.delete(
  "/platform/:platform_id",
  productPlatformController.deleteProductPlatform
);

export default productsPlatfromRoutes;
