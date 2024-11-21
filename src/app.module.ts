import { Module } from '@nestjs/common';
import { AppService } from './appService/app.service';
import { UsersModule } from './users/users.module';
import { AppController } from './appController/app.controller';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [UsersModule, ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
