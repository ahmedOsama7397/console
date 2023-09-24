import config from "../../../config";
import handleBaseUrlEnvironment from "../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../ServiceAbstract";

type RequestBody = Record<string, any>;
class IndustriesServices extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getIndustries(token: string) {
        return this.setMethod("GET")
            .setKey("getIndustries")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl("/api/v1/service/user_page/industries");
    }
    showIndustries(token: string, industries_id: string) {
        return this.setMethod("GET")
            .setKey("showIndustries")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/industries/${industries_id}`);
    }


}

export default IndustriesServices;
