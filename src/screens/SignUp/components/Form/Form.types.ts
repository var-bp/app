import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewProps,
} from 'react-native';

export interface RenderFn {
  onChange(v: string): void;
  onBlur(e: NativeSyntheticEvent<TextInputFocusEventData>): void;
  value: string;
}

export interface RowPT extends ViewProps {
  height?: string | number;
  marginBottom?: string;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  retypePassword: string;
}
