import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { TaskModule } from './Task/Task.module';

@Module({
  imports: [UserModule, TaskModule],
})
export class AppModule {}
