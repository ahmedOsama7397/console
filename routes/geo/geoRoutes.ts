import express from "express";
import geoControllers from "../../controllers/geo/geoControllers";

const GeoRouter = express.Router();


// Countries Routes
GeoRouter.get("/countries/:country_id", geoControllers.getCountries);
GeoRouter.put("/countries/:country_id", geoControllers.updateCountry);
GeoRouter.get("/countries", geoControllers.listActiveCountries);
// Language Routes
GeoRouter.get("/countries/:country_id/languages", geoControllers.listLanguage);
GeoRouter.post("/countries/:country_id/languages", geoControllers.listLanguage);
GeoRouter.put("/countries/:country_id/languages", geoControllers.updateLanguage);
GeoRouter.delete("/countries/:country_id/languages", geoControllers.deleteLanguage);
// Translation Routes
GeoRouter.get("/countries/:country_id/languages/:lang_id/translations", geoControllers.listTranslation);
GeoRouter.post("/countries/:country_id/languages/:lang_id/translations", geoControllers.createLanguage);
GeoRouter.put("/countries/:country_id/languages/:lang_id/translations", geoControllers.updateTranslation);
GeoRouter.delete("/countries/:country_id/languages/:lang_id/translations", geoControllers.deleteTranslation);
// Import and export langauges
GeoRouter.post("/translations/import", geoControllers.importTranslation);
GeoRouter.get("/translations/export", geoControllers.exportTranslation);


export { GeoRouter };