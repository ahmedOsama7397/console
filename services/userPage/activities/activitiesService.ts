import config from "../../../config";
import handleBaseUrlEnvironment from "../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../ServiceAbstract";

type RequestBody = Record<string, any>;
class ActivitiesServices extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getActivities(token: string) {
        return this.setMethod("GET")
            .setKey("getActivities")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl("/api/v1/service/user_page/activities");
    }

    showActivities(token: string, activities_id: string) {
        return this.setMethod("GET")
            .setKey("showActivities")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/activities/${activities_id}`);
    }



}

export default ActivitiesServices;
