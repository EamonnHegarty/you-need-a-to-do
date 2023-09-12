import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { Profile } from '../../components/profile/Profile';
import { CreateTaskForm } from '../../components/createTaskForm/CreateTaskForm';
import { Status } from '../../enums/Status';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../../components/taskCounter/TaskCounter';
import { Task } from '../../components/task/Task';
import { Box } from '@mui/material';
import { useGetTodosQuery } from '../../slices/todosApiSlice';
import { IData } from '../../interfaces/IData';
import { Loader } from '../../components/Loader/Loader';
import { sortTasksByStatus } from '../../utils/sortTasksByStatus';

export const Dashboard: FC = (): ReactElement => {
  const { data, isLoading, isError, refetch } = useGetTodosQuery({});

  const [numTodo, setNumToDo] = useState<number>(0);
  const [numInProgress, setNumInProgress] = useState<number>(0);
  const [numCompleted, setNumCompleted] = useState<number>(0);
  const [shouldRefreshData, setShouldRefreshData] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      let numTodo = 0;
      let numInProgress = 0;
      let numCompleted = 0;

      data.forEach((item: IData) => {
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

  useEffect(() => {
    if (shouldRefreshData) {
      refetch();
      setShouldRefreshData(false);
    }
  }, [shouldRefreshData, refetch]);

  const sortedData = sortTasksByStatus(data || []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h1>Oh no something went wrong</h1>
      ) : (
        <Grid container minHeight="100vh" p={0} m={0}>
          <Grid item md={8} px={4}>
            <Grid container display="flex" justifyContent="center">
              <Box mb={4} px={4}>
                <h2>Status Of Your Task As On {format(new Date(), 'PPPP')}</h2>
              </Box>
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
              <Grid item display="flex" flexDirection="column" xs={10} md={8}>
                {sortedData?.map((toDo: IData) => (
                  <Task
                    key={toDo._id}
                    _id={toDo._id}
                    title={toDo.title}
                    description={toDo.description}
                    status={toDo.status}
                    task_date={toDo.task_date || null}
                    setShouldRefreshData={setShouldRefreshData}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              height: '100vh',
              position: 'fixed',
              right: 0,
              top: 0,
              width: '100%',
              backgroundColor: 'background.paper',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Profile name="Eamonn" />
            <CreateTaskForm setShouldRefreshData={setShouldRefreshData} />
          </Grid>
        </Grid>
      )}
    </>
  );
};
