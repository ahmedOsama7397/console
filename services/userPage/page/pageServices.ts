import config from "../../../config";
import handleBaseUrlEnvironment from "../../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../../ServiceAbstract";

type RequestBody = Record<string, any>;
class PageServices extends ServiceAbstract {
    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.CONSOLE_URL as string);
    }
    // ================================ Activities ================================
    getActivities(token: string, page_id: string) {
        return this.setMethod("GET")
            .setKey("getActivities")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/activities`);
    }
    updateActivities(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("PUT")
            .setKey("updateActivities")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/activities`);
    }

    // ================================ Badges ================================
    createBadges(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("POST")
            .setKey("createBadges")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/badges`);
    }
    // ================================ Categories ================================
    getCategories(token: string, page_id: string) {
        return this.setMethod("GET")
            .setKey("getCategories")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/categories`);
    }
    updateCategories(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("PUT")
            .setKey("updateCategories")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/categories`);
    }
    // ================================ Emails ================================
    getEmails(token: string, page_id: string) {
        return this.setMethod("GET")
            .setKey("getEmails")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/emails`);
    }
    updateEmails(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("PUT")
            .setKey("updateEmails")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/emails`);
    }
    deleteEmail(token: string, page_id: string, email_id: string) {
        return this.setMethod("DELETE")
            .setKey("deleteEmail")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/emails/${email_id}`);
    }
    // ================================ industries ================================
    getIndustries(token: string, page_id: string) {
        return this.setMethod("GET")
            .setKey("getIndustries")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/industries`);
    }
    updateIndustries(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("PUT")
            .setKey("updateIndustries")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/industries`);
    }
    // ================================ links ================================
    getLinks(token: string, page_id: string) {
        return this.setMethod("GET")
            .setKey("getLinks")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/links`);
    }
    createLink(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("POST")
            .setKey("createLink")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/links`);
    }
    deleteLink(token: string, page_id: string, link_id: string) {
        return this.setMethod("DELETE")
            .setKey("deleteLink")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/links/${link_id}`);
    }
    // ================================ phone ================================
    getPhonse(token: string, page_id: string) {
        return this.setMethod("GET")
            .setKey("getPhonse")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/phones`);
    }
    createPhone(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("POST")
            .setKey("createPhone")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/phones`);
    }
    deletePhone(token: string, page_id: string, phone_id: string) {
        return this.setMethod("DELETE")
            .setKey("deletePhone")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/phones/${phone_id}`);
    }
    // ================================ work hourse ================================
    getWorkHourse(token: string, page_id: string) {
        return this.setMethod("GET")
            .setKey("getWorkHourse")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/work-hours`);
    }
    createWorkHourse(token: string, page_id: string, body: RequestBody) {
        return this.setMethod("POST")
            .setKey("createWorkHourse")
            .setBody(body)
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/work-hours`);
    }
    deleteWorkHourse(token: string, page_id: string) {
        return this.setMethod("DELETE")
            .setKey("deleteWorkHourse")
            .setHeaders({ authorization: `Bearer ${token}` })
            .setUrl(`/api/v1/service/user_page/pages/${page_id}/work-hours/`);
    }
}

export default PageServices;
