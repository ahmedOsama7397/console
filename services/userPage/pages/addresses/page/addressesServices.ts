import config from "../../../../../config";
import handleBaseUrlEnvironment from "../../../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../../../ServiceAbstract";

type RequestBody = Record<string, any>;
class PagesAddressesServices extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }
    getAddresses(token: string, page_id: string) {
        return this.setMethod("GET")
            .setKey("getAddresses")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/${page_id}/addresses`);
    }
    createAddresses(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("POST")
            .setKey("createAddresses")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/${page_id}/addresses`);
    }
    showAddresses(token: string, page_id: string, addresse_id: string) {
        return this.setMethod("GET")
            .setKey("showAddresses")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/${page_id}/addresses/${addresse_id}`);
    }
    updateAddresses(token: string, page_id: string, addresse_id: string, body: RequestBody) {
        return this.setMethod("PUT")
            .setKey("updateAddresses")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/${page_id}/addresses/${addresse_id}`);
    }
    deleteAddresses(token: string, page_id: string, addresse_id: string) {
        return this.setMethod("DELETE")
            .setKey("deleteAddresses")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/${page_id}/addresses/${addresse_id}`);
    }


}

export default PagesAddressesServices;
