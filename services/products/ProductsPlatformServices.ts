import config from "../../config/index";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, any>;

class ProductsPlatformServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.PRODUCTS_URL as string);
  }

  productPlatform(token: string) {
    return this.setMethod("GET")
      .setKey("productPlatform")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v1/service/products/platform")
      .get();
  }

  showProductPlatform(token: string, platform_id: string) {
    return this.setMethod("GET")
      .setKey("showProductPlatform")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v1/service/products/platform/${platform_id}`)
      .get();
  }

  storeProductPlatform(token: string, data: RequestBody) {
    return this.setMethod("POST")
      .setKey("storeProductPlatform")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v1/service/products/platform")
      .get();
  }

  updateProductPlatform(token: string, data: RequestBody, platform_id: string) {
    return this.setMethod("PUT")
      .setKey("updateProductPlatform")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v1/service/products/platform/${platform_id}`)
      .get();
  }

  deleteProductPlatform(token: string, platform_id: string) {
    return this.setMethod("DELETE")
      .setKey("deleteProductPlatform")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v1/service/products/platform/${platform_id}`)
      .get();
  }
}

export default ProductsPlatformServices;
