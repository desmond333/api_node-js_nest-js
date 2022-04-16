import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Picture, PictureSchema } from './schemas/pictures.schema';
import { PicturesController } from './pictures.controller';
import { PicturesService } from './pictures.service';

@Module({
  controllers: [PicturesController],
  providers: [PicturesService],
  imports: [
    MongooseModule.forFeature([{ name: Picture.name, schema: PictureSchema }]),
  ],
})
export class PicturesModule {}
