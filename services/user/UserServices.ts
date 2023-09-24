import config from "../../config/index";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, any>;
class UserServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
  }

  getUsers(token: string) {
    return this.setMethod("GET")
      .setKey("getUsers")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v2/service/console/admin/users/")
      .get();
  }

  showUser(token: string, user_id: string) {
    return this.setMethod("GET")
      .setKey("showUser")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/console/admin/users/${user_id}`)
      .get();
  }

  storeUser(token: string, data: RequestBody) {
    return this.setMethod("POST")
      .setKey("storeUser")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v2/service/console/admin/users/")
      .get();
  }

  updateUser(token: string, data: RequestBody, user_id: string) {
    return this.setMethod("PUT")
      .setKey("updateUser")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/console/admin/users/${user_id}`)
      .get();
  }

  deleteUser(token: string, user_id: string) {
    return this.setMethod("DELETE")
      .setKey("deleteUser")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/console/admin/users/${user_id}`)
      .get();
  }

  blockUser(token: string, data: RequestBody, user_id: string) {
    return this.setMethod("PUT")
      .setKey("blockUser")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/console/admin/users/${user_id}`)
      .get();
  }

  sendOtp(token: string, data: RequestBody, user_id: string) {
    return this.setMethod("POST")
      .setKey("sendOtp")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/auth/admin/resend/otp/${user_id}`)
      .get();
  }

  verifyUser(token: string, user_id: string) {
    return this.setMethod("GET")
      .setKey("verifyUser")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(`/api/v2/service/auth/admin/verify/user/${user_id}`)
      .get();
  }
}

export default UserServices;
