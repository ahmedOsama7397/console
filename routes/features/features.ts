import express from 'express';
import featureController from '../../controllers/features/featureController';

const featuresRoute = express.Router();

featuresRoute.get('/features', featureController.getFeatures);
featuresRoute.get('/features/:feature_id', featureController.showFeature);
featuresRoute.post('/features', featureController.storeFeature);
featuresRoute.put('/features/:feature_id', featureController.updateFeature);
featuresRoute.delete('/features/:feature_id', featureController.destroyFeature);

export { featuresRoute };