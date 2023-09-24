import  express  from 'express';
import entityController from '../../../controllers/types/entities/entityController';

const entityTypeRoute = express.Router();

entityTypeRoute.get('/types/entity',entityController.getEntities);
entityTypeRoute.get('/types/entity/:entity_id',entityController.showEntity);
entityTypeRoute.post('/types/entity',entityController.storeEntity);
entityTypeRoute.put('/types/entity/:entity_id',entityController.updateEntity);
entityTypeRoute.delete('/types/entity/:entity_id',entityController.destroyEntity);

export { entityTypeRoute };
