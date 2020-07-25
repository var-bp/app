type valueof<T> = T[keyof T];

enum IconName {
  User = 'user',
}

export interface PropTypes {
  name: valueof<IconName>;
  size: number;
  color?: string;
}
