import React, {FC} from 'react';
import {LabelPT} from './InputLabel.types';
import {Container} from './InputLabel.styles';

const InputLabel: FC<LabelPT> = ({children}) => {
  return <Container>{children}</Container>;
};

export default InputLabel;
