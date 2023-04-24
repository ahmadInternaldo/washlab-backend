import { OutletInterface } from '../../../features/outlet/interface/outlet.interface';

export interface LaundryVariantInterface {
  name: string; // unique in one user
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

export enum LaundryVariantStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
