/* tslint:disable */
import { DetailDto } from './detail-dto';
import { FunctionalityDto } from './functionality-dto';
import { UserDepartmentDto } from './user-department-dto';
import { UserLevelDto } from './user-level-dto';
export interface PermissionDto {
  department?: UserDepartmentDto;
  detail?: DetailDto;
  enabled?: boolean;
  functionality?: FunctionalityDto;
  id?: number;
  level?: UserLevelDto;
}
