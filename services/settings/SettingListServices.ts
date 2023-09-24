import config from "../../config/index";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, any>;

class SettingListServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
  }

  settingList(token: string) {
    return this.setMethod("GET")
      .setKey("settingList")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v2/service/console/admin/settings/list")
      .get();
  }
}

export default SettingListServices;
