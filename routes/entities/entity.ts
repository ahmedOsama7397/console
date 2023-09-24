import express from 'express';
import entityController from '../../controllers/entities/entityController';

const entityRoute = express.Router();

entityRoute.get('/entities', entityController.getEntities);
entityRoute.get('/entities/:entity_id', entityController.showEntity);
entityRoute.post('/entities', entityController.storeEntity);
entityRoute.put('/entities/:entity_id', entityController.updateEntity);
entityRoute.delete('/entities/:entity_id', entityController.destroyEntity);

export { entityRoute };