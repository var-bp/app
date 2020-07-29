import styled from 'styled-components/native';
import {View} from 'react-native';
import {OffsetPT} from './RadioGroup.types';

export const Container = styled(View)`
  flex-direction: row;
`;

export const Offset = styled(View)<OffsetPT>`
  flex-direction: row;
  margin-left: ${({marginLeft}) => marginLeft};
`;
