import React, {FC} from 'react';
import {Blue} from 'helpers/colors';
import {LinkPT} from './Link.types';
import {Container, Text} from './Link.styles';

const Link: FC<LinkPT> = ({
  children,
  onPress,
  color = Blue[1],
  activeOpacity = 0.7,
}) => {
  return (
    <Container onPress={onPress} activeOpacity={activeOpacity}>
      <Text color={color}>{children}</Text>
    </Container>
  );
};

export default Link;
