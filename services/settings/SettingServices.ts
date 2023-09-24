import config from "../../config/index";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, any>;

class SettingServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
  }

  settings(token: string) {
    return this.setMethod("GET")
      .setKey("settings")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v2/service/console/admin/settings")
      .get();
  }

  updateSettings(token: string, setting_id: string, data: RequestBody) {
    return this.setMethod("PUT")
      .setKey("updateSettings")
      .setBody(data)
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v2/service/console/admin/settings/" + setting_id)
      .get();
  }
}

export default SettingServices;
