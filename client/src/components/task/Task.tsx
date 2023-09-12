import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import { IData } from '../../interfaces/IData';
import dayjs from 'dayjs';
import { Status } from '../../enums/Status';
import { useUpdateTodoMutation } from '../../slices/todosApiSlice';

interface Task extends IData {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setShouldRefreshData: Function;
}

export const Task: FC<Task> = (props): ReactElement => {
  const { _id, title, task_date, description, status, setShouldRefreshData } =
    props;

  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const [checked, setChecked] = useState(status === Status.inProgress);

  const formattedDate = task_date ? dayjs(task_date).format('YYYY-MM-DD') : '';

  useEffect(() => {
    setChecked(status === Status.inProgress);
  }, [status]);

  const handleOnStatusChange = useCallback(() => {
    const newStatus = checked ? Status.todo : Status.inProgress;

    const promise = updateTodo({
      id: _id,
      status: newStatus,
    }).unwrap();

    promise
      .then(() => {
        setChecked(!checked);
        setShouldRefreshData(true);
      })
      .catch(() => {
        console.log('error');
      });
  }, [_id, checked, setShouldRefreshData, updateTodo]);

  const handleOnMarkComplete = useCallback(() => {
    const newStatus =
      status === Status.completed ? Status.todo : Status.completed;

    const promise = updateTodo({
      id: _id,
      status: newStatus,
    }).unwrap();

    promise
      .then(() => {
        setChecked(!checked);
        setShouldRefreshData(true);
      })
      .catch(() => {
        console.log('error');
      });
  }, [_id, checked, setShouldRefreshData, status, updateTodo]);

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
      }}
    >
      <Box display="flex" width="100%" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Box>
          <Chip variant="outlined" label={formattedDate} />
        </Box>
      </Box>
      <Box>
        <Typography>{description}</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        {status !== Status.completed && (
          <FormControlLabel
            label="In Progress"
            control={
              <Switch
                color="warning"
                checked={checked}
                onChange={handleOnStatusChange}
                disabled={isLoading}
              />
            }
          />
        )}

        <Button
          variant="contained"
          color={status === Status.completed ? 'error' : 'success'}
          size="small"
          sx={{ color: '#ffffff' }}
          disabled={isLoading}
          onClick={handleOnMarkComplete}
        >
          {status === Status.completed ? 'Mark Uncomplete' : 'Mark Complete'}
        </Button>
      </Box>
    </Box>
  );
};
