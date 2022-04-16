import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Picture, PictureDocument } from './schemas/pictures.schema';
import { CreatePictureDto, UpdatePictureDto } from './dto';

@Injectable()
export class PicturesService {
  constructor(
    @InjectModel(Picture.name) private pictureModel: Model<PictureDocument>
  ) {}

  async getAll(): Promise<Picture[]> {
    return this.pictureModel.find().exec();
  }

  async getById(id: string): Promise<Picture> {
    return this.pictureModel.findById(id);
  }

  async create(pictureDto: CreatePictureDto): Promise<Picture> {
    const newPicture = new this.pictureModel(pictureDto);
    return newPicture.save();
  }

  async remove(id: string): Promise<Picture> {
    return this.pictureModel.findByIdAndRemove(id);
  }

  async update(id: string, pictureDto: UpdatePictureDto): Promise<Picture> {
    return this.pictureModel.findByIdAndUpdate(id, pictureDto, { new: true });
  }
}
