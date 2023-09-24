import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
import config from "../../config";
type RequestBody = Record<string, string>;

export class TagService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getTags(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getTags")
            .setUrl("/console/api/v1/tags")
            .get();
    }

    showTag(token: string, tag_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showTag")
            .setUrl("/console/api/v1/tags/" + tag_id)
            .get();
    }

    storeTag(data: RequestBody, token: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeTag")
            .setUrl("/console/api/v1/tags")
            .get();
    }

    updateTag(data: RequestBody, token: string, tag_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateTag")
            .setUrl("/console/api/v1/tags/" + tag_id )
            .get();
    }

    destroyTag(token: string, tag_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyTag")
            .setUrl("/console/api/v1/tags/" + tag_id)
            .get();
    }
}