import React, { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import { ITask } from '../../interfaces/ITask';
import { Status } from '../../enums/Status';
import { Priority } from '../../enums/Priority';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from '../../helpers/renderPriorityBorderColor';
import { format } from 'date-fns';
import { ITaskHeader } from '../../interfaces/ITaskHeader';
import { ITaskDescription } from '../../interfaces/ITaskDescription';
import { ITaskFooter } from '../../interfaces/ITaskFooter';

const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { title = 'Default Title', date = new Date() } = props;
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={2}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, 'PPP')} />
      </Box>
    </Box>
  );
};

const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const {
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate a fugit hic maiores necessitatibus.',
  } = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch onChange={(e) => onStatusChange(e)} color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Test Description',
    priority = Priority.normal,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

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
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};
