import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from '../../interfaces/ITaskCounter';
import { Status } from '../../enums/Status';
import { emitCorrectBorderColor } from '../../utils/emitCorrectBorderColor';
import { emitCorrectLabel } from '../../utils/emitCorrectLabel';
import PropTypes from 'prop-types';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status = Status.completed, count = 0 } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            background: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: emitCorrectBorderColor(status),
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
};
