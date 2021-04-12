/* tslint:disable */
import { PositionEnum } from './position-enum';
import { Project } from './project';
export interface Employee {
  dbirth?: string;
  dstart?: string;
  id?: number;
  name: string;
  position?: PositionEnum;
  positionType?: null | number;
  projects?: null | Array<Project>;
  surname: string;
}
