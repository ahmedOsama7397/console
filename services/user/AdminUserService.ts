import config from "../../config/index";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, any>;

class AdminUserServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
  }

  adminUsers(token: string) {
    return this.setMethod("GET")
      .setKey("adminUsers")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v2/service/console/admin/user-admins")
      .get();
  }

  showAdminUser(token: string, admin_id: string) {
    return this.setMethod("GET")
      .setKey("showAdminUser")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/console/admin/user-admins/${admin_id}`)
      .get();
  }

  storeAdminUser(token: string, data: RequestBody) {
    return this.setMethod("POST")
      .setKey("storeAdminUser")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v2/service/console/admin/user-admins")
      .get();
  }

  updateAdminUser(token: string, data: RequestBody, admin_id: string) {
    return this.setMethod("PUT")
      .setKey("updateAdminUser")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/console/admin/user-admins/${admin_id}`)
      .get();
  }

  deleteAdminUser(token: string, admin_id: string) {
    return this.setMethod("DELETE")
      .setKey("deleteAdminUser")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/console/admin/user-admins/${admin_id}`)
      .get();
  }
}

export default AdminUserServices;
