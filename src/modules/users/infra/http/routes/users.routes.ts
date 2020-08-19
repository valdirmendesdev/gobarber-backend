import { Router } from 'express';
import multer from 'multer';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import uploadConfig from '@config/upload';
import UsersController from '../controllers/UsersController';
import AvatarController from '../controllers/AvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const avatarController = new AvatarController();

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  avatarController.update,
);

export default usersRouter;
