import config from "../../../config";
import handleBaseUrlEnvironment from "../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../ServiceAbstract";
type RequestBody = Record<string, string>;

export class entityService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getEntities(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getEntities")
            .setUrl("/console/api/v2/types/entity")
            .get();
    }

    showEntity(token: string, entity_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showEntity")
            .setUrl("/console/api/v2/types/entity/" + entity_id)
            .get();
    }

    storeEntity(data: RequestBody, token: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeEntity")
            .setUrl("/console/api/v2/types/entity")
            .get();
    }

    updateEntity(data: RequestBody, token: string, entity_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateEntity")
            .setUrl("/console/api/v2/types/entity/" + entity_id)
            .get();
    }

    destroyEntity(token: string, entity_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyEntity")
            .setUrl("/console/api/v2/types/entity/" + entity_id)
            .get();
    }
}