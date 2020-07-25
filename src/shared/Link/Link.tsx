import React, {FC} from 'react';
import {LinkPT} from './Link.types';
import {Blue} from '../../helpers/colors';
import {Container, Text} from './Link.styles';

const Link: FC<LinkPT> = ({
  title,
  onPress,
  color = Blue[1],
  activeOpacity = 0.7,
}) => {
  return (
    <Container onPress={onPress} activeOpacity={activeOpacity}>
      <Text color={color}>{title}</Text>
    </Container>
  );
};

export default Link;
