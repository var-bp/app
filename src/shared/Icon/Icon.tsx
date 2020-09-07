import React from 'react';
import {User, Form} from './components/Icons';
import {PropTypes} from './Icon.types';

// SVG 2 JSX https://svg2jsx.com/
const Icon = ({name, size, color}: PropTypes) => {
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
