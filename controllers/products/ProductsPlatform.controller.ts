import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import ProductsPlatformServices from "../../services/products/ProductsPlatformServices";

class ProductsPlatform {
  productPlatform(req: Request, res: Response) {
    const productPlatformServices = new ProductsPlatformServices();
    const { authorization } = req.headers;

    apiHandler(productPlatformServices.productPlatform(authorization as string))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  showProductPlatform(req: Request, res: Response) {
    const productPlatformServices = new ProductsPlatformServices();
    const { authorization } = req.headers;

    apiHandler(
      productPlatformServices.showProductPlatform(
        authorization as string,
        req.params.platform_id
      )
    )
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  storeProductPlatform(req: Request, res: Response) {
    const productPlatformServices = new ProductsPlatformServices();
    const { authorization } = req.headers;

    apiHandler(
      productPlatformServices.storeProductPlatform(
        authorization as string,
        req.body
      )
    )
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  updateProductPlatform(req: Request, res: Response) {
    const productPlatformServices = new ProductsPlatformServices();
    const { authorization } = req.headers;

    apiHandler(
      productPlatformServices.updateProductPlatform(
        authorization as string,
        req.body,
        req.params.platform_id
      )
    )
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  deleteProductPlatform(req: Request, res: Response) {
    const productPlatformServices = new ProductsPlatformServices();
    const { authorization } = req.headers;

    apiHandler(
      productPlatformServices.deleteProductPlatform(
        authorization as string,
        req.params.platform_id
      )
    )
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

export default new ProductsPlatform();
