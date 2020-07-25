import React, {FC} from 'react';
import {User, Form} from './Icons';
import {PropTypes} from './Icon.types';

// SVG 2 JSX https://svg2jsx.com/
const Icon: FC<PropTypes> = ({name, size, color}) => {
  switch (name) {
    case 'user':
      return <User size={size} color={color} />;
    case 'form':
      return <Form size={size} color={color} />;
    default:
      return null;
  }
};

export default Icon;
