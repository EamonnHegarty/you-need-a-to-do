import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TaskArea } from '../../components/taskArea/TaskArea';
import { getTodos } from '../../store/app/apiActions';
import { useAppDispatch } from '../../hooks';

export const Dashboard: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  dispatch(getTodos());

  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};
