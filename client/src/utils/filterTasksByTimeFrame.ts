import dayjs from 'dayjs';
import { IData } from '../interfaces/IData';

export const filterTasksByTimeFrame = (tasks: IData[], timeFrame: string) => {
  // The current date for reference
  const currentDate = dayjs(); // Make sure to import dayjs

  return tasks.filter((task) => {
    // Convert string date to Dayjs object
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
