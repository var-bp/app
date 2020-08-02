import styled from 'styled-components/native';
import {Text} from 'react-native';
import {Black} from 'helpers/colors';
import {FontFamily, FontWeight, FontSize, LineHeight} from 'helpers/typo';

export const Container = styled(Text)`
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.S};
  line-height: ${LineHeight[FontSize.S]};
  color: ${Black[2]};
`;
