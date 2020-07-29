import {ViewProps} from 'react-native';

export interface RadioButtonPT {
  value: string;
  label: string;
  isChecked?: boolean;
  disabled?: boolean;
  onPress(value: string): void;
  uncheckedColor: string;
  color: string;
}

export interface RadioPT extends ViewProps {
  borderColor: string;
}

export interface DotPT extends ViewProps {
  backgroundColor: string;
  scale: number;
}
