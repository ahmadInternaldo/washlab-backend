import { UserInterface } from '../../../features/user/interface/user.interface';
import {
  OutletInterface,
  OutletStatusEnum,
} from '../interface/outlet.interface';
import { CashierInterface } from '../../../features/cashier/interface/cashier.interface';
import { LaundryVariantInterface } from '../../../features/laundry-variant/interface/laundry-variant.interface';

export class OutletCreateDto implements OutletInterface {
  name: string;
  code: string;
  address?: string;
  phone?: string;
  status: OutletStatusEnum;
  creator_uuid: string;
  editor_uuid?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  user_uuid: string;
  user?: UserInterface;
  cashiers?: CashierInterface[];
  laundry_variants?: LaundryVariantInterface[];
}
