import config from "../../../config";
import handleBaseUrlEnvironment from "../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../ServiceAbstract";
type RequestBody = Record<string, string>;

export class profileService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getProfiles(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getProfiles")
            .setUrl("/console/api/v2/types/profile")
            .get();
    }

    showProfile(token: string, profile_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showProfile")
            .setUrl("/console/api/v2/types/profile/" + profile_id)
            .get();
    }

    storeProfile(data: RequestBody, token: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeProfile")
            .setUrl("/console/api/v2/types/profile")
            .get();
    }

    updateProfile(data: RequestBody, token: string, profile_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateProfile")
            .setUrl("/console/api/v2/types/profile/" + profile_id)
            .get();
    }

    destroyProfile(token: string, profile_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyProfile")
            .setUrl("/console/api/v2/types/profile/" + profile_id)
            .get();
    }
}