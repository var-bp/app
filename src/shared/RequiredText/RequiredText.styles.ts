import styled from 'styled-components/native';
import {Text} from 'react-native';
import {Red} from '../../helpers/colors';
import {FontFamily, FontWeight, FontSize, LineHeight} from '../../helpers/typo';

export const Container = styled(Text)`
  margin-top: 1px;
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.XS};
  line-height: ${LineHeight[FontSize.XS]};
  color: ${Red[1]};
`;
