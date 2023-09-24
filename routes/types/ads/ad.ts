import  express  from 'express';
import adController from '../../../controllers/types/ads/adController';

const adRoute = express.Router();

adRoute.get('/types/ad',adController.getAds);
adRoute.get('/types/ad/:ad_id',adController.showAd);
adRoute.post('/types/ad',adController.storeAd);
adRoute.put('/types/ad/:ad_id',adController.updateAd);
adRoute.delete('/types/ad/:ad_id',adController.destroyAd);

export { adRoute };
