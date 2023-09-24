import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
import config from "../../config";
type RequestBody = Record<string, string>;

export class MenuService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getMenus(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getMenus")
            .setUrl("/console/api/v1/menus")
            .get();
    }

    showMenu(token: string, menu_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showMenu")
            .setUrl("/console/api/v1/menus/" + menu_id)
            .get();
    }

    storeMenu(data: RequestBody, token: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeMenu")
            .setUrl("/console/api/v1/menus")
            .get();
    }

    updateMenu(data: RequestBody, token: string, menu_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateMenu")
            .setUrl("/console/api/v1/menus/" + menu_id )
            .get();
    }

    destroyMenu(token: string, menu_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyMenu")
            .setUrl("/console/api/v1/menus /" + menu_id)
            .get();
    }
}