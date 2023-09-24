import config from "../../../config";
import handleBaseUrlEnvironment from "../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../ServiceAbstract";
type RequestBody = Record<string, string>;

export class adService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getAds(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getAds")
            .setUrl("/console/api/v2/types/ad")
            .get();
    }

    showAd(token: string, ad_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showAd")
            .setUrl("/console/api/v2/types/ad/" + ad_id)
            .get();
    }

    storeAd(data: RequestBody, token: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeAd")
            .setUrl("/console/api/v2/types/ad")
            .get();
    }

    updateAd(data: RequestBody, token: string, ad_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateAd")
            .setUrl("/console/api/v2/types/ad/" + ad_id)
            .get();
    }

    destroyAd(token: string, ad_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyAd")
            .setUrl("/console/api/v2/types/ad/" + ad_id)
            .get();
    }
}