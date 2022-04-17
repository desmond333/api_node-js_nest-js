import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PictureDocument = Picture & Document;
export type TYear = {
  readonly start: number;
  readonly finish: number;
};

@Schema()
export class Picture {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop(
    raw({
      start: { type: Number },
      finish: { type: Number },
    })
  )
  year: TYear;

  @Prop()
  path: string;
}

export const PictureSchema = SchemaFactory.createForClass(Picture);
