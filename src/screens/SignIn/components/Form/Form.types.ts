import {ViewProps} from 'react-native';

export interface RowPT extends ViewProps {
  height?: string | number;
  marginBottom?: string;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}
