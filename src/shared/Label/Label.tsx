import React, {FC} from 'react';
import {LabelPT} from './Label.types';
import {Container} from './Label.styles';

const Label: FC<LabelPT> = ({children}) => {
  return <Container>{children}</Container>;
};

export default Label;
