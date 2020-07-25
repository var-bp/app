import {TouchableOpacityProps, TextProps} from 'react-native';

export interface ButtonPT extends TouchableOpacityProps {
  title: string;
  backgroundColor: string;
  color?: string;
  activeOpacity?: number;
}

export interface ContainerPT extends TouchableOpacityProps {
  backgroundColor: string;
}

export interface TextPT extends TextProps {
  color: string;
}
