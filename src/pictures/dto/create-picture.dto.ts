import { TYear } from 'pictures/schemas/pictures.schema';

export class CreatePictureDto {
  readonly title: string;
  readonly year: TYear;
  readonly path: string;
}
