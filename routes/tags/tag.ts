import express from 'express';
import tagController from '../../controllers/tags/tagController';

const tagRoute = express.Router();

tagRoute.get('/tags', tagController.getTags);
tagRoute.get('/tags/:tag_id', tagController.showTag);
tagRoute.post('/tags', tagController.storeTag);
tagRoute.put('/tags/:tag_id', tagController.updateTag);
tagRoute.delete('/tags/:tag_id', tagController.destroyTag);

export { tagRoute };