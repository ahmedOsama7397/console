import config from "../../config";
import handleBaseUrlEnvironment from "../../utils/BaseUrlEnv";
import { ServiceAbstract } from "../ServiceAbstract";

type RequestBody = Record<string, string>;

class GeoService extends ServiceAbstract {

    constructor() {
        super();
        this.base_url = handleBaseUrlEnvironment(config.dev.GEO_URL as string);
    }


    // get all counteries 
    getCountries(country_id: string, token: string) {
        return this.setMethod("GET")
            .setKey("getCountries")
            .setHeaders({ authorization: "Bearer " + token })
            .setUrl("/api/v1/service/geo/admin/countries/" + country_id)
            .get();
    }
    // update country
    updateCountry(country_id: string, body: RequestBody, token: string) {
        return this.setMethod("PUT")
            .setKey("updateCountry")
            .setHeaders({ authorization: "Bearer " + token })
            .setBody(body)
            .setUrl("/api/v1/service/geo/admin/countries/" + country_id)
            .get();
    }
    // Get all active countries
    listActiveCountries(token: string) {
        return this.setMethod("GET")
            .setKey("listActiveCountries")
            .setHeaders({ authorization: "Bearer " + token })
            .setUrl("/api/v1/service/geo/countries/")
            .get();
    }
    // List Languages
    listLanguages(country_id: string, token: string) {
        return this.setMethod("GET")
            .setKey("listLanguages")
            .setHeaders({ authorization: "Bearer " + token })
            .setUrl(`/api/v1/service/geo/admin/countries/${country_id}/languages`)
            .get();
    }
    // create Languages
    createLanguages(country_id: string, body: RequestBody, token: string) {
        return this.setMethod("POST")
            .setKey("createLanguages")
            .setHeaders({ authorization: "Bearer " + token })
            .setBody(body)
            .setUrl(`/api/v1/service/geo/admin/countries/${country_id}/languages`)
            .get();
    }
    // delete language
    deleteLanguages(country_id: string, token: string) {
        return this.setMethod("DELETE")
            .setKey("deleteLanguages")
            .setHeaders({ authorization: "Bearer " + token })
            .setUrl(`/api/v1/service/geo/admin/countries/${country_id}/languages`)
            .get();
    }
    // update language
    updateLanguages(country_id: string, body: RequestBody, token: string) {
        return this.setMethod("PUT")
            .setKey("updateLanguages")
            .setHeaders({ authorization: "Bearer " + token })
            .setBody(body)
            .setUrl(`/api/v1/service/geo/admin/countries/${country_id}/languages`)
            .get();
    }
    // list Translation(
    listTranslation(countryId: string, lanaguageId: string, token: string) {
        return this.setMethod("GET")
            .setKey("listTranslation")
            .setHeaders({ authorization: "Bearer " + token })
            .setUrl(`/api/v1/service/geo/admin/countries/${countryId}/languages/${lanaguageId}/translations`)
            .get();
    }
    // create Translation(
    createTranslation(countryId: string, lanaguageId: string, body: RequestBody, token: string) {
        return this.setMethod("POST")
            .setKey("createTranslation")
            .setHeaders({ authorization: "Bearer " + token })
            .setBody(body)
            .setUrl(`/api/v1/service/geo/admin/countries/${countryId}/languages/${lanaguageId}/translations`)
            .get();
    }
    // delete Translation(
    deleteTranslation(countryId: string, lanaguageId: string, token: string) {
        return this.setMethod("DELETE")
            .setKey("deleteTranslation")
            .setHeaders({ authorization: "Bearer " + token })
            .setUrl(`/api/v1/service/geo/admin/countries/${countryId}/languages/${lanaguageId}/translations`)
            .get();
    }
    // update Translation(
    updateTranslation(countryId: string, lanaguageId: string, body: RequestBody, token: string) {
        return this.setMethod("PUT")
            .setKey("updateTranslation")
            .setHeaders({ authorization: "Bearer " + token })
            .setBody(body)
            .setUrl(`/api/v1/service/geo/admin/countries/${countryId}/languages/${lanaguageId}/translations`)
            .get();
    }

    // import translation
    importTranslation(body: RequestBody, token: string) {
        return this.setMethod("POST")
            .setKey("importTranslation")
            .setHeaders({ authorization: "Bearer " + token })
            .setBody(body)
            .setUrl(`/api/v1/service/geo/translations/import`)
            .get();
    }
    // export translation
    exportTranslation(token: string) {
        return this.setMethod("GET")
            .setKey("exportTranslation")
            .setHeaders({ authorization: "Bearer " + token })
            .setUrl(`/api/v1/service/geo/translations/export`)
            .get();
    }


}

export { GeoService };