import { OutletInterface } from "src/features/outlet/interface/outlet.interface";
import { UserInterface, UserRoleEnum } from "../interface/user.interface";

export class UserCreateDto implements UserInterface{
  username: string;
  hash: string;
  phone?: string;
  full_name: string;
  first_name: string;
  last_name: string;
  email?: string;
  creator_uuid?: string;
  editor_uuid?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  role: UserRoleEnum;
  pict_url?: string;
  outlets: OutletInterface[];

}
