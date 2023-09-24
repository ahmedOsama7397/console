import express from 'express';
import featuresListController from '../../controllers/features_list/featuresListController';

const featuresListRoute = express.Router();

featuresListRoute.get('/features/list', featuresListController.getFeaturesList);
featuresListRoute.get('/features/list/:feature_list_id', featuresListController.showFeatureList);
featuresListRoute.post('/features/list', featuresListController.storeFeatureList);
featuresListRoute.put('/features/list/:feature_list_id', featuresListController.updateFeatureList);
featuresListRoute.delete('/features/list/:feature_list_id', featuresListController.destroyFeatureList);

export { featuresListRoute };