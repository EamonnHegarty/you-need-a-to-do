import { Dayjs } from 'dayjs';

export interface IData {
  id: string;
  title: string;
  description: string;
  task_date: Dayjs | null;
  status: string;
  priority: string;
}
