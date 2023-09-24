import config from "../../config/index";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, any>;

class SettingEntitieServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
  }

  settingEntities(token: string) {
    return this.setMethod("GET")
      .setKey("settingEntities")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl("/api/v2/service/console/admin/settings/entities")
      .get();
  }

  updateEntities(token: string, entity_id: string, setting_id: string) {
    return this.setMethod("PUT")
      .setKey("updateEntities")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(
        `/api/v2/service/console/admin/settings/entities/${entity_id}/update/${setting_id}`
      )
      .get();
  }
}

export default SettingEntitieServices;
