import React, { FC, ReactElement } from 'react';
import {
  Box,
  Typography,
  Stack,
  TextField,
  SelectChangeEvent,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Button,
} from '@mui/material';
import { Status } from '../../enums/Status';
import { Priority } from '../../enums/Priority';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ISelectField } from '../../interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    value = '',
    label = 'Select Box',
    name = 'selectBox',
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const CreateTaskForm: FC = (): ReactElement => {
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
          fullWidth
        />
        <TextField
          id="Description"
          name="description"
          label="Description"
          placeholder="Description"
          variant="outlined"
          size="small"
          multiline
          rows={4}
          fullWidth
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Task Date" format="DD/MM/YY" />
        </LocalizationProvider>
        <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            items={Object.values(Status).map((status) => ({
              value: status,
              label: status.toUpperCase(),
            }))}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={Object.values(Priority).map((priority) => ({
              value: priority,
              label: priority.toUpperCase(),
            }))}
          />
        </Stack>
        <Button variant="contained" size="large" fullWidth>
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
