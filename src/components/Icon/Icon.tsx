import React, {FunctionComponent} from 'react';
import {Girl as GirlIcon} from './Icons';

type valueof<T> = T[keyof T];

enum IconName {
  Girl = 'girl',
}

interface PropTypes {
  name: valueof<IconName>;
  size: number;
  color?: string;
}

// SVG 2 JSX https://svg2jsx.com/
const Icon: FunctionComponent<PropTypes> = ({name, size, color}) => {
  switch (name) {
    case 'girl':
      return <GirlIcon size={size} color={color} />;
    default:
      return null;
  }
};

export default Icon;
