import config from "../../../config";
import handleBaseUrlEnvironment from "../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../ServiceAbstract";

type RequestBody = Record<string, any>;
class BadgesServices extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }

    getBadges(token: string) {
        return this.setMethod("GET")
            .setKey("getBadges")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl("/api/v1/service/user_page/badges");
    }

    createBadges(token: string, body: RequestBody) {
        return this.setMethod("POST")
            .setKey("createBadges")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/badges/`);
    }


    showBadges(token: string, badges_id: string) {
        return this.setMethod("GET")
            .setKey("showBadges")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/badges/${badges_id}`);
    }
    updateBadges(token: string, badges_id: string, body: RequestBody) {
        return this.setMethod("PUT")
            .setKey("updateBadges")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/badges/${badges_id}`);
    }
    deleteBadges(token: string, badges_id: string) {
        return this.setMethod("DELETE")
            .setKey("deleteBadges")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/badges/${badges_id}`);
    }


}

export default BadgesServices;
