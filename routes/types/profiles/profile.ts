import  express  from 'express';
import profileController from '../../../controllers/types/profiles/profileController';

const profileRoute = express.Router();

profileRoute.get('/types/profile',profileController.getProfiles);
profileRoute.get('/types/profile/:profile_id',profileController.showProfile);
profileRoute.post('/types/profile',profileController.storeProfile);
profileRoute.put('/types/profile/:profile_id',profileController.updateProfile);
profileRoute.delete('/types/profile/:profile_id',profileController.destroyProfile);

export { profileRoute };
