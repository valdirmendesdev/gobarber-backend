import { Router } from 'express';

import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticate);
providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  providerDayAvailabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerMonthAvailabilityController.index,
);

export default providersRouter;
