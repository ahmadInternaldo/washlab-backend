export interface LaundryCategoryInterface {
  name: string; // unique in one user
  status: LaundryCategoryStatusEnum;
}

export enum LaundryCategoryStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
