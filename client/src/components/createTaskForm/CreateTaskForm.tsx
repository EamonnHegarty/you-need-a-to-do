import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { TaskTitleField } from './helpers/TaskTitleField';
import { TaskDescriptionField } from './helpers/TaskDescriptionField';
import { TaskDateField } from './helpers/TaskDateField';

export const CreateTaskFrom: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
      </Stack>
    </Box>
  );
};
