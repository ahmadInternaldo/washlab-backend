import { OutletInterface } from "../../../features/outlet/interface/outlet.interface";

export interface UserInterface {
  username: string;
  hash: string;
  phone?: string;
  full_name: string;
  first_name: string;
  last_name: string;
  email?: string; // unique
  creator_uuid?: string; // not required in super admin
  editor_uuid?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  role: UserRoleEnum;
  pict_url?: string;
  outlets: OutletInterface[]
}

export enum UserRoleEnum {
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
}
