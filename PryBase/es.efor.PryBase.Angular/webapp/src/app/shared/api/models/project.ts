/* tslint:disable */
import { Employee } from './employee';
import { PriorityEnum } from './priority-enum';
export interface Project {
  dend?: string;
  dstart?: string;
  id?: number;
  name: string;
  priority?: PriorityEnum;
  priorityType?: null | number;
  responsable?: Employee;
  responsableId?: number;
}
