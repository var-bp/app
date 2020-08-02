import styled from 'styled-components/native';
import {TouchableOpacity, Text as RNText} from 'react-native';
import {FontFamily, FontWeight, FontSize, LineHeight} from 'helpers/typo';
import {TextPT, ContainerPT} from './Button.types';

export const Container = styled(TouchableOpacity)<ContainerPT>`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({backgroundColor}) => backgroundColor};
`;

export const Text = styled(RNText)<TextPT>`
  font-family: ${FontFamily[FontWeight.Medium]};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.S};
  line-height: ${LineHeight[FontSize.S]};
  color: ${({color}) => color};
  align-self: center;
  text-transform: uppercase;
`;
