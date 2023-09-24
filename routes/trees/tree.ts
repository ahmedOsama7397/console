import express from 'express';
import treeController from '../../controllers/trees/treeController';

const treeRoute = express.Router();

treeRoute.get('/menu/:menu_id/tree', treeController.getTrees);
treeRoute.get('/menu/:menu_id/tree/:tree_id', treeController.showTree);
treeRoute.post('/menu/:menu_id/tree', treeController.storeTree);
treeRoute.put('/menu/:menu_id/tree/:tree_id', treeController.updateTree);
treeRoute.delete('/menu/:menu_id/tree/:tree_id', treeController.destroyTree);
treeRoute.post('/menu/:menu_id/tree/sort', treeController.sortTree);
treeRoute.get('/dashboard/menu', treeController.dashboardTree);
treeRoute.get('/mobile/menu', treeController.treeMobile);

export { treeRoute };