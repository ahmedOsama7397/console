import express from "express";
import industriesController from "../../../controllers/userPage/industries/industriesController";
import pageController from "../../../controllers/userPage/page/pageController";
const pageRouter = express.Router();

pageRouter.get("/pages/:page_id/activities", pageController.getActivities)
pageRouter.put("/pages/:page_id/activities", pageController.updateActivities)
// Badge
pageRouter.post("/pages/:page_id/badges", pageController.createBadges)
// ================================ Categories ================================
pageRouter.get("/pages/:page_id/categories", pageController.getCategories)
pageRouter.put("/pages/:page_id/categories", pageController.updateCategories)
// ================================ Emails ================================
pageRouter.get("/pages/:page_id/emails", pageController.getEmails)
pageRouter.put("/pages/:page_id/emails", pageController.updateEmails)
pageRouter.delete("/pages/:page_id/emails/:email_id", pageController.deleteEmail)
// ================================ industries ================================
pageRouter.get("/pages/:page_id/industries", pageController.getIndustries)
pageRouter.put("/pages/:page_id/industries", pageController.updateIndustries)
// ================================ links ================================
pageRouter.get("/pages/:page_id/links", pageController.getLinks)
pageRouter.post("/pages/:page_id/links", pageController.createLink)
pageRouter.delete("/pages/:page_id/links/:link_id", pageController.deleteLink)
// ================================ phone ================================
pageRouter.get("/pages/:page_id/phones", pageController.getPhonse)
pageRouter.post("/pages/:page_id/phones", pageController.createPhone)
pageRouter.delete("/pages/:page_id/phones/:phone_id", pageController.deletePhone)
// ================================ Woring hourse ================================
pageRouter.get("/pages/:page_id/work-hours", pageController.getWorkHourse)
pageRouter.post("/pages/:page_id/work-hours", pageController.createWorkHourse)
pageRouter.delete("/pages/:page_id/work-hours/", pageController.deleteWorkHourse)
export default pageRouter;
