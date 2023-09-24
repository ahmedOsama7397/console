import config from "../../config";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
type RequestBody = Record<string, string>;

export class EntityService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.PRODUCTS_URL as string);
    }

    getEntities(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getEntities")
            .setUrl("/api/v1/entities")
            .get();
    }

    showEntity(token: string, entity_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showEntity")
            .setUrl("/api/v1/entities/" + entity_id)
            .get();
    }

    storeEntity(data: RequestBody, token: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeEntity")
            .setUrl("/api/v1/entities")
            .get();
    }

    updateEntity(data: RequestBody, token: string, entity_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateEntity")
            .setUrl("/api/v1/entities/" + entity_id)
            .get();
    }

    destroyEntity(token: string, entity_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyEntity")
            .setUrl("/api/v1/entities/" + entity_id)
            .get();
    }

}
