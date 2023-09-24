import config from "../../config";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";

type RequestBody = Record<string, string>;

export class AuthAdminServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.AUTH_URL as string);
  }
  adminLogin(data: RequestBody) {
    return this.setMethod("POST")
      .setBody(data)
      .setHeaders({})
      .setKey("admin_login")
      .setUrl("/api/v2/service/auth/admin/login")
      .get();
  }
}
