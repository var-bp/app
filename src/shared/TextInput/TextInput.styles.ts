import styled from 'styled-components/native';
import {TextInput, Animated} from 'react-native';
import {FontFamily, FontWeight, FontSize} from 'helpers/typo';
import {Gray, White} from 'helpers/colors';
import {InputWrapperPT} from './TextInput.types';

export const InputWrapper = styled(Animated.View)<InputWrapperPT>`
  border-bottom-width: 1px;
  border-style: solid;
`;

export const Input = styled(TextInput)`
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.S};
  color: ${Gray[1]};
  background-color: ${White[1]};
`;
