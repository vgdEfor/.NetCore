/* tslint:disable */
import { FunctionalityDto } from './functionality-dto';
import { ModuleDto } from './module-dto';
export interface MenuDto {
  department?: null | string;
  functionalities?: null | Array<FunctionalityDto>;
  loginDisplayName?: null | string;
  modules?: null | Array<ModuleDto>;
}
