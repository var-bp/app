import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  ViewProps,
  Animated,
} from 'react-native';

export type OnBlurFn = (
  e: NativeSyntheticEvent<TextInputFocusEventData>,
) => void;

export type OnFocusFn = (
  e: NativeSyntheticEvent<TextInputFocusEventData>,
) => void;

export type OnChangeTextFn = (value: string) => void;

export interface TextInputPT extends TextInputProps {
  onChangeText: OnChangeTextFn;
}

export interface InputWrapperPT extends Animated.WithAnimatedValue<ViewProps> {}
