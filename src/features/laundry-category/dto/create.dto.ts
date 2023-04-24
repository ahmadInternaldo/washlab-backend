import {
  LaundryCategoryInterface,
  LaundryCategoryStatusEnum,
} from '../interface/laundry-category.interface';

export class LaundryCategoryCreateDto implements LaundryCategoryInterface {
  name: string;
  status: LaundryCategoryStatusEnum;
}
