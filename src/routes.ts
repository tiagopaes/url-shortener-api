import { Router} from 'express';
import UrlController from './controllers/UrlController';

const routes = Router();

routes.post('/', UrlController.create);
routes.get('/:short_code', UrlController.redirect);

export default routes;
