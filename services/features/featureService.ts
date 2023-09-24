import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
import config from "../../config";
type RequestBody = Record<string, string>;

export class FeatureService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getFeatures(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getFeatures")
            .setUrl("/console/api/v1/features")
            .get();
    }

    showFeature(token: string, feature_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showFeature")
            .setUrl("/console/api/v1/features/" + feature_id)
            .get();
    }

    storeFeature(data: RequestBody, token: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeFeature")
            .setUrl("/console/api/v1/features")
            .get();
    }

    updateFeature(data: RequestBody, token: string, feature_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateFeature")
            .setUrl("/console/api/v1/features/" + feature_id )
            .get();
    }

    destroyFeature(token: string, feature_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyFeature")
            .setUrl("/console/api/v1/features/" + feature_id)
            .get();
    }
}