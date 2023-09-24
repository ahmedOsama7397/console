import express from 'express';
import menuController from '../../controllers/menus/menuController';

const menuRoute = express.Router();

menuRoute.get('/menus', menuController.getMenus);
menuRoute.get('/menus/:menu_id', menuController.showMenu);
menuRoute.post('/menus', menuController.storeMenu);
menuRoute.put('/menus/:menu_id', menuController.updateMenu);
menuRoute.delete('/menus/:menu_id', menuController.destroyMenu);

export { menuRoute };