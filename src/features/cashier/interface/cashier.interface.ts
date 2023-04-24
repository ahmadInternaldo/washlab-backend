import { OutletInterface } from '../../../features/outlet/interface/outlet.interface';

export interface CashierInterface {
  username: string; // unique in one outlet
  hash: string;
  address: string;
  phone: string; // unique in one outlet
  status: CashierStatusEnum;
  creator_uuid: string;
  editor_uuid?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  outlet_uuid: string;
  outlet?: OutletInterface;
}

export enum CashierStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
