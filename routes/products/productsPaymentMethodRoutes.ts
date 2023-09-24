import express from "express";
import productsPaymentMethod from "../../controllers/products/ProductsPaymentMethod.controller";

const productsPaymentMethodRoutes = express.Router();

productsPaymentMethodRoutes.get(
  "/payment-method",
  productsPaymentMethod.paymentMethod
);

productsPaymentMethodRoutes.get(
  "/payment-method/:payment_method_id",
  productsPaymentMethod.showPaymentMethod
);

productsPaymentMethodRoutes.post(
  "/payment-method",
  productsPaymentMethod.storePaymentMethod
);

productsPaymentMethodRoutes.put(
  "/payment-method/:payment_method_id",
  productsPaymentMethod.updatePaymentMethod
);

productsPaymentMethodRoutes.delete(
  "/payment-method/:payment_method_id",
  productsPaymentMethod.deletePaymentMethod
);

export default productsPaymentMethodRoutes;
