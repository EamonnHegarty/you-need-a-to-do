import React, { FC, ReactElement } from 'react';
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

export const Task: FC<IData> = (props): ReactElement => {
  const { title, task_date, description, status } = props;

  const formattedDate = task_date ? dayjs(task_date).format('YYYY-MM-DD') : '';

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
        <FormControlLabel
          label="In Progress"
          control={
            <Switch color="warning" checked={status === Status.inProgress} />
          }
        />
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{ color: '#ffffff' }}
        >
          Mark Complete
        </Button>
      </Box>
    </Box>
  );
};
