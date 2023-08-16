import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TaskArea } from '../../components/taskArea/TaskArea';
import axios from 'axios';

export const Dashboard: FC = (): ReactElement => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const fetchToDos = async () => {
      const { data } = await axios.get('/api/todos');
      setToDos(data);
    };

    fetchToDos();
  }, []);

  console.log(toDos);

  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};
