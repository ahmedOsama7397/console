import config from "../../config/index";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, any>;

class ProductsPaymentMethodServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.PRODUCTS_URL as string);
  }

  paymentMethod(token: string) {
    return this.setMethod("GET")
      .setKey("PaymentMethod")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v1/service/products/payment-method")
      .get();
  }

  showPaymentMethod(token: string, platform_id: string) {
    return this.setMethod("GET")
      .setKey("showPaymentMethod")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v1/service/products/payment-method/${platform_id}`)
      .get();
  }

  storePaymentMethod(token: string, data: RequestBody) {
    return this.setMethod("POST")
      .setKey("storePaymentMethod")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v1/service/products/payment-method")
      .get();
  }

  updatePaymentMethod(token: string, data: RequestBody, platform_id: string) {
    return this.setMethod("PUT")
      .setKey("updatePaymentMethod")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v1/service/products/payment-method/${platform_id}`)
      .get();
  }

  deletePaymentMethod(token: string, platform_id: string) {
    return this.setMethod("DELETE")
      .setKey("deletePaymentMethod")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v1/service/products/payment-method/${platform_id}`)
      .get();
  }
}

export default ProductsPaymentMethodServices;
