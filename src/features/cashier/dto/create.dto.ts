import { OutletInterface } from '../../../features/outlet/interface/outlet.interface';
import {
  CashierInterface,
  CashierStatusEnum,
} from '../interface/cashier.interface';

export class CashierCreateDto implements CashierInterface {
  username: string;
  hash: string;
  address: string;
  phone: string;
  status: CashierStatusEnum;
  creator_uuid: string;
  editor_uuid?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  outlet_uuid: string;
  outlet?: OutletInterface;
}
