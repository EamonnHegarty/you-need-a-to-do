import React, { FC, ReactElement, useState, useCallback } from 'react';
import {
  Box,
  Typography,
  Stack,
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Button,
} from '@mui/material';
import { Status } from '../../enums/Status';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SelectChangeEvent } from '@mui/material/Select';
import { Dayjs } from 'dayjs';
import { useCreateTodoMutation } from '../../slices/todosApiSlice';
import { toast } from 'react-toastify';

interface CreateTaskForm {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setShouldRefreshData: Function;
}
export const CreateTaskForm: FC<CreateTaskForm> = (props): ReactElement => {
  const { setShouldRefreshData } = props;

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [taskDate, setTaskDate] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState<string>('');

  const [createTodo, { isLoading }] = useCreateTodoMutation();

  const handleOnTitleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value }: { value: string } = event.target;
      setTitle(value);
    },
    [],
  );

  const handleOnDescriptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value }: { value: string } = event.target;
      setDescription(value);
    },
    [],
  );
  const handleOnTaskDateChange = useCallback((newDate: Dayjs | null) => {
    setTaskDate(newDate);
  }, []);

  const handleOnStatusChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      const { value }: { value: string } = event.target;
      setStatus(value);
    },
    [],
  );

  const handleOnSubmitForm = useCallback(() => {
    const promise = createTodo({
      title,
      description,
      task_date: taskDate,
      status,
    }).unwrap();

    promise
      .then(() => {
        toast.success('Successfully add new to do');
        setShouldRefreshData(true);
      })
      .catch(() => {
        toast.error('Failed to create a new to do');
      })
      .finally(() => {
        setTitle('');
        setDescription('');
        setTaskDate(null);
        setStatus('');
      });
  }, [createTodo, description, setShouldRefreshData, status, taskDate, title]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={5}
    >
      <Typography mb={1} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TextField
          id="title"
          label="Task Title"
          placeholder="Task Title"
          variant="outlined"
          size="small"
          name="title"
          value={title}
          onChange={handleOnTitleChange}
          fullWidth
          disabled={isLoading}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          placeholder="Description"
          variant="outlined"
          size="small"
          multiline
          rows={4}
          value={description}
          onChange={handleOnDescriptionChange}
          fullWidth
          disabled={isLoading}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Task Date"
            format="DD/MM/YY"
            value={taskDate}
            onChange={handleOnTaskDateChange}
            disabled={isLoading}
          />
        </LocalizationProvider>
        <FormControl fullWidth size="small">
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="status-select"
            name="status"
            value={status}
            onChange={handleOnStatusChange}
            MenuProps={{
              disableScrollLock: true,
            }}
            disabled={isLoading}
          >
            {Object.values(Status).map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          size="large"
          onClick={handleOnSubmitForm}
          fullWidth
          disabled={
            isLoading ||
            title.length === 0 ||
            description.length === 0 ||
            taskDate === null ||
            status.length === 0
          }
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
