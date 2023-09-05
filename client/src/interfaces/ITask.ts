import { ITaskDescription } from './ITaskDescription';
import { ITaskHeader } from './ITaskHeader';
import { ITaskFooter } from './ITaskFooter';

export interface ITask extends ITaskDescription, ITaskHeader, ITaskFooter {
  id?: string;
  status?: string;
}
