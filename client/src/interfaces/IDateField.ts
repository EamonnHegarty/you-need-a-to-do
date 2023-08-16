import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
  value?: Date;
  onChange?: (date: Date | null) => void;
}
