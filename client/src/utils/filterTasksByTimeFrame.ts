import dayjs from 'dayjs';
import { IData } from '../interfaces/IData';

export const filterTasksByTimeFrame = (tasks: IData[], timeFrame: string) => {
  const currentDate = dayjs();

  return tasks.filter((task) => {
    const taskDate = dayjs(task.task_date);

    switch (timeFrame) {
      case 'day':
        return currentDate.isSame(taskDate, 'day');
      case 'week':
        return currentDate.isSame(taskDate, 'week');
      case 'month':
        return currentDate.isSame(taskDate, 'month');
      case 'year':
        return currentDate.isSame(taskDate, 'year');
      default:
        return true;
    }
  });
};
