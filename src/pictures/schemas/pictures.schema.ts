import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PictureDocument = Picture & Document;

@Schema()
export class Picture {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  year: number;

  @Prop()
  path: string;
}

export const PictureSchema = SchemaFactory.createForClass(Picture);
