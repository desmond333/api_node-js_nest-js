import { TYear } from 'pictures/schemas/pictures.schema';

export class UpdatePictureDto {
  readonly title: string;
  readonly year: TYear;
  readonly path: string;
}
