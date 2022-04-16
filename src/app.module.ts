import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbUrl } from 'db_const';
import { PicturesModule } from 'pictures/pictures.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PicturesModule, MongooseModule.forRoot(dbUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
