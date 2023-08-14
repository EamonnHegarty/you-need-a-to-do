import React, { FC, ReactElement, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const TaskDateField: FC = (): ReactElement => {
  const [date, setData] = useState<Date | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Task Date"
        value={date}
        onChange={(newValue) => setData(newValue)}
        format="DD/MM/YY"
      />
    </LocalizationProvider>
  );
};
