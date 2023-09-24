import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";
import config from "../../config";
type RequestBody = Record<string, string>;

export class MenuTreeService extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getTrees(token: string, menu_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("getTrees")
            .setUrl("/console/api/v1/menu/" + menu_id + "/tree")
            .get();
    }

    showTree(token: string, menu_id: string, tree_id: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("showTree")
            .setUrl("/console/api/v1/menu/" + menu_id + "/tree/" + tree_id)
            .get();
    }

    storeTree(data: RequestBody, token: string, menu_id: string) {
        return this.setMethod("POST")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("storeTree")
            .setUrl("/console/api/v1/menu/" + menu_id + "/tree")
            .get();
    }

    updateTree(data: RequestBody, token: string, menu_id: string, tree_id: string) {
        return this.setMethod("PUT")
            .setBody(data)
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("updateTree")
            .setUrl("/console/api/v1/menu/" + menu_id + "/tree/" + tree_id)
            .get();
    }

    destroyTree(token: string, menu_id: string, tree_id: string) {
        return this.setMethod("DELETE")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("destroyTree")
            .setUrl("/console/api/v1/menu/" + menu_id + "/tree/" + tree_id)
            .get();
    }

    sortTree(token: string, menu_id: string) {
        return this.setMethod("POST")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("sortTree")
            .setUrl("/console/api/v1/menu/" + menu_id + "/tree/sort")
            .get();
    }

    dashboardTree(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("dashboardTree")
            .setUrl("/api/v2/service/console/admin/dashboard-menu-tree")
            .get();
    }

    treeMobile(token: string) {
        return this.setMethod("GET")
            .setHeaders({ authorization: "Bearer " + token })
            .setKey("treeMobile")
            .setUrl("/api/v1/service/console/menu")
            .get();
    }
}