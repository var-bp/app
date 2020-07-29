import {ViewProps} from 'react-native';

export interface GroupItem {
  value: string;
  label: string;
  isChecked: boolean;
  isDisabled: boolean;
}

export interface RadioGroupPT {
  group: Array<GroupItem>;
  offsetLeft: string;
  defaultChecked?: string;
  onSelect(value: string): void;
}

export interface OffsetPT extends ViewProps {
  marginLeft: string | number;
}
