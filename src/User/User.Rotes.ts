import { RouterModule } from '@nestjs/core';
import { UserController } from './User.Controller';

export const UserRoutes = RouterModule.register([
  { path: 'users', module: UserController },
]);
