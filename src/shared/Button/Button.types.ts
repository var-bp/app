import {TouchableOpacityProps, TextProps} from 'react-native';

export interface ButtonPT extends TouchableOpacityProps {
  children: string;
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
