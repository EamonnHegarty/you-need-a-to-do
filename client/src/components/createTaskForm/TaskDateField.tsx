import React, { FC, ReactElement } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IDateField } from '../../interfaces/IDateField';
import Proptypes from 'prop-types';

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = null,
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Task Date"
        value={value}
        onChange={onChange}
        format="DD/MM/YY"
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

TaskDateField.propTypes = {
  disabled: Proptypes.bool,
  onChange: Proptypes.func,
  value: Proptypes.instanceOf(Date),
};
