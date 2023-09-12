import { Status } from '../enums/Status';
import { IData } from '../interfaces/IData';

const statusToNumber = (status: Status) => {
  if (status === Status.inProgress) return 1;
  if (status === Status.todo) return 2;
  if (status === Status.completed) return 3;
  return 4;
};

export const sortTasksByStatus = (tasks: IData[]) => {
  return [...tasks].sort(
    (a: IData, b: IData) =>
      statusToNumber(a.status as Status) - statusToNumber(b.status as Status),
  );
};
