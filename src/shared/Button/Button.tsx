import React, {FC} from 'react';
import {ButtonPT} from './Button.types';
import {White} from '../../helpers/colors';
import {Container, Text} from './Button.styles';

const Button: FC<ButtonPT> = ({
  children,
  onPress,
  backgroundColor,
  color = White[1],
  activeOpacity = 0.7,
}) => {
  return (
    <Container
      onPress={onPress}
      backgroundColor={backgroundColor}
      activeOpacity={activeOpacity}>
      <Text color={color}>{children}</Text>
    </Container>
  );
};

export default Button;
