import React, {FC} from 'react';
import {RequiredTextPT} from './RequiredText.types';
import {Container} from './RequiredText.styles';

const RequiredText: FC<RequiredTextPT> = ({children}) => {
  return <Container>{children}</Container>;
};

export default RequiredText;
