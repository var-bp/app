import {TouchableOpacityProps, TextProps} from 'react-native';

export interface LinkPT extends TouchableOpacityProps {
  title: string;
  color?: string;
  activeOpacity?: number;
}

export interface TextPT extends TextProps {
  color: string;
}
