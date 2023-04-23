import { UserInterface } from 'src/features/user/interface/user.interface';
import {
  OutletInterface,
  OutletStatusEnum,
} from '../interface/outlet.interface';

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
  user: UserInterface;
}
