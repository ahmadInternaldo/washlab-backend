import { LaundryVariantInterface } from '../../../features/laundry-variant/interface/laundry-variant.interface';
import { CashierInterface } from '../../../features/cashier/interface/cashier.interface';
import { UserInterface } from '../../../features/user/interface/user.interface';

export interface OutletInterface {
  name: string; // unique
  code: string; // unique
  address?: string;
  phone?: string;
  status: OutletStatusEnum;
  creator_uuid: string; // super admin or developer uuid
  editor_uuid?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  user_uuid: string;
  user?: UserInterface;
  cashiers?: CashierInterface[];
  laundry_variants?: LaundryVariantInterface[];
}

export enum OutletStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
