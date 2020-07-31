import {ViewProps, Animated} from 'react-native';

export interface RadioButtonPT {
  value: string;
  label: string;
  isChecked?: boolean;
  disabled?: boolean;
  onPress(value: string): void;
  uncheckedColor: string;
  color: string;
}

export interface RadioPT extends Animated.WithAnimatedValue<ViewProps> {}

export interface DotPT extends Animated.WithAnimatedValue<ViewProps> {
  backgroundColor: string;
}
