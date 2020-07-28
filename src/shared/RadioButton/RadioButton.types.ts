export interface RadioButtonPT {
  value: string;
  label: string;
  status?: 'checked' | 'unchecked';
  disabled?: boolean;
  onPress?(): void;
  uncheckedColor?: string;
  color?: string;
}
