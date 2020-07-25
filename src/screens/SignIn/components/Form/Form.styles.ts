import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {Red} from '../../../../helpers/colors';
import {
  FontFamily,
  FontWeight,
  FontSize,
  LineHeight,
} from '../../../../helpers/typo';

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const User = styled(View)`
  align-items: center;
  margin-bottom: 20px;
`;

export const Row = styled(View)`
  height: 70px;
`;

export const RequiredText = styled(Text)`
  padding: 2px 10px;
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.XS};
  line-height: ${LineHeight[FontSize.XS]};
  color: ${Red[1]};
`;
