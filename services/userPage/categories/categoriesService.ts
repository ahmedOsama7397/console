import config from "../../../config";
import handleBaseUrlEnvironment from "../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../ServiceAbstract";

type RequestBody = Record<string, any>;
class CategoriesServices extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getCategories(token: string) {
        return this.setMethod("GET")
            .setKey("getCategories")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl("/api/v1/service/user_page/categories");
    }
    showCategories(token: string, categories_id: string) {
        return this.setMethod("GET")
            .setKey("showCategories")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/categories/${categories_id}`);
    }


}

export default CategoriesServices;
