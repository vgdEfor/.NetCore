/* tslint:disable */
import { UserDepartmentDto } from './user-department-dto';
import { UserLevelDto } from './user-level-dto';
export interface UserDto {
  department?: UserDepartmentDto;
  displayName?: null | string;
  id?: string;
  level?: UserLevelDto;
  name?: null | string;
}
