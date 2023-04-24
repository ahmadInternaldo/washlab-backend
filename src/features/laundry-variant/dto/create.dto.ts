import { OutletInterface } from '../../../features/outlet/interface/outlet.interface';
import {
  LaundryVariantInterface,
  LaundryVariantStatusEnum,
} from '../interface/laundry-variant.interface';

export class LaundryVariantCreateDto implements LaundryVariantInterface {
  name: string;
  code: string;
  status: LaundryVariantStatusEnum;
  price: number;
  pict_url: string;
  creator_uuid: string;
  editor_uuid?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  outlets: OutletInterface[];
}
