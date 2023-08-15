import React, { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/TaskCounter';
import { Task } from '../task/Task';

export const TaskArea: FC = (): ReactElement => {
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
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        {/* TASKS */}
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
