import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { Picture } from './schemas/pictures.schema';
import { CreatePictureDto, UpdatePictureDto } from './dto';

@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}
  @Get()
  getAll(): Promise<Picture[]> {
    return this.picturesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Picture> {
    return this.picturesService.getById(id);
  }

  @Post()
  create(@Body() createPicture: CreatePictureDto): Promise<Picture> {
    return this.picturesService.create(createPicture);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Picture> {
    return this.picturesService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updatePicture: UpdatePictureDto,
    @Param('id') id: string
  ): Promise<Picture> {
    return this.picturesService.update(id, updatePicture);
  }
}
