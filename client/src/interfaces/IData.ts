import { Dayjs } from 'dayjs';

export interface IData {
  _id: string;
  title: string;
  description: string;
  task_date: Dayjs | null;
  status: string;
}
