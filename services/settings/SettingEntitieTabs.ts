import config from "../../config/index";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, any>;

class SettingEntitieTabsServices extends ServiceAbstract {
  constructor() {
    super();
    this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
  }

  settingEntitiesTabs(token: string, entity_id: string) {
    return this.setMethod("GET")
      .setKey("EntitieTabs")
      .setHeaders({ authorization: `Bearer ${token}` })
      .setUrl(
        `/api/v2/service/console/admin/settings/entities/${entity_id}/tabs`
      )
      .get();
  }
}

export default SettingEntitieTabsServices;
