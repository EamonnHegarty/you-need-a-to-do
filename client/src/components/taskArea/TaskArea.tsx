import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/TaskCounter';
import { Task } from '../task/Task';
import { useAppSelector } from '../../hooks';
import { Status } from '../../enums/Status';

export const TaskArea: FC = (): ReactElement => {
  const { data } = useAppSelector((state) => state.app);

  const [numTodo, setNumToDo] = useState<number>(0);
  const [numInProgress, setNumInProgress] = useState<number>(0);
  const [numCompleted, setNumCompleted] = useState<number>(0);

  useEffect(() => {
    if (data) {
      let numTodo = 0;
      let numInProgress = 0;
      let numCompleted = 0;

      data.forEach((item) => {
        if (item.status === Status.todo) {
          numTodo++;
        } else if (item.status === Status.inProgress) {
          numInProgress++;
        } else if (item.status === Status.completed) {
          numCompleted++;
        }
      });

      setNumToDo(numTodo);
      setNumInProgress(numInProgress);
      setNumCompleted(numCompleted);
    }
  }, [data]);

  return (
    <Grid item md={8} px={4}>
      <Grid container display="flex" justifyContent="center">
        <Box mb={4} px={4}>
          <h2>Status Of Your Task As On {format(new Date(), 'PPPP')}</h2>
        </Box>
        {/* COUNTERS */}
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter status={Status.todo} count={numTodo} />
          <TaskCounter status={Status.inProgress} count={numInProgress} />
          <TaskCounter status={Status.completed} count={numCompleted} />
        </Grid>
        {/* TASKS */}
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          {data?.map((toDo, index) => (
            <Task
              key={index}
              title={toDo.title}
              description={toDo.description}
              priority={toDo.priority}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
