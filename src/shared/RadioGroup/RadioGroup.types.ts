export interface GroupItem {
  value: string;
  label: string;
  isChecked: boolean;
  isDisabled: boolean;
}

export interface RadioGroupPT {
  group: Array<GroupItem>;
  defaultChecked?: string;
  onSelect(value: string): void;
}
