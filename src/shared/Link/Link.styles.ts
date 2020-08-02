import styled from 'styled-components/native';
import {TouchableOpacity, Text as RNText} from 'react-native';
import {FontFamily, FontWeight, FontSize, LineHeight} from 'helpers/typo';
import {TextPT} from './Link.types';

export const Container = styled(TouchableOpacity)``;

export const Text = styled(RNText)<TextPT>`
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.S};
  line-height: ${LineHeight[FontSize.S]};
  color: ${({color}) => color};
`;
