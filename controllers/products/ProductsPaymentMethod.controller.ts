import { Request, Response } from "express";
import apiHandler from "../../utils/ApiHandler";
import ProductsPaymentMethodServices from "../../services/products/ProductsPaymentMethodServices";

class ProductsPaymentMethod {
  paymentMethod(req: Request, res: Response) {
    const productsPaymentMethod = new ProductsPaymentMethodServices();
    const { authorization } = req.headers;

    apiHandler(productsPaymentMethod.paymentMethod(authorization as string))
      .then((data) => {
        res.send(data);
        return data;
      })
      .catch((err) => {
        res.send(err);
        return err;
      });
  }

  showPaymentMethod(req: Request, res: Response) {
    const productsPaymentMethod = new ProductsPaymentMethodServices();

    const { authorization } = req.headers;

    apiHandler(
      productsPaymentMethod.showPaymentMethod(
        authorization as string,
        req.params.payment_method_id
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

  storePaymentMethod(req: Request, res: Response) {
    const productsPaymentMethod = new ProductsPaymentMethodServices();

    const { authorization } = req.headers;

    apiHandler(
      productsPaymentMethod.storePaymentMethod(
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

  updatePaymentMethod(req: Request, res: Response) {
    const productsPaymentMethod = new ProductsPaymentMethodServices();

    const { authorization } = req.headers;

    apiHandler(
      productsPaymentMethod.updatePaymentMethod(
        authorization as string,
        req.body,
        req.params.payment_method_id
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

  deletePaymentMethod(req: Request, res: Response) {
    const productsPaymentMethod = new ProductsPaymentMethodServices();

    const { authorization } = req.headers;

    apiHandler(
      productsPaymentMethod.deletePaymentMethod(
        authorization as string,
        req.params.payment_method_id
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

export default new ProductsPaymentMethod();
