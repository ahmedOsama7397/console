import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
import config from "../../config";
type RequestBody = Record<string, string>;

export class FeatureListService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getFeaturesList(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getFeaturesList")
            .setUrl("/console/api/v2/features/list")
            .get();
    }

    showFeatureList(token: string, feature_list_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showFeatureList")
            .setUrl("/console/api/v2/features/list/" + feature_list_id)
            .get();
    }

    storeFeatureList(data: RequestBody, token: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeFeatureList")
            .setUrl("/console/api/v2/features/list")
            .get();
    }

    updateFeatureList(data: RequestBody, token: string, feature_list_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateFeatureList")
            .setUrl("/console/api/v2/features/list/" + feature_list_id )
            .get();
    }

    destroyFeatureList(token: string, feature_list_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyFeatureList")
            .setUrl("/console/api/v2/features/list/" + feature_list_id)
            .get();
    }
}