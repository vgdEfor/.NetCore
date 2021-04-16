/* tslint:disable */
import { ModuleDto } from './module-dto';
export interface LogImportDto {
  date?: string;
  id?: number;
  module?: ModuleDto;
  observations?: null | string;
  status?: null | string;
}
