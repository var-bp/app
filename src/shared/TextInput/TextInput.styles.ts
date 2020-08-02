import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {FontFamily, FontWeight, FontSize} from 'helpers/typo';
import {Gray, White, Blue} from 'helpers/colors';
import {InputPT} from './TextInput.types';

export const Input = styled(TextInput)<InputPT>`
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${Gray[4]};
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.S};
  color: ${Gray[1]};
  background-color: ${White[1]};

  ${({isFocus}) =>
    isFocus &&
    `
    border-bottom-color: ${Blue[3]};
  `}
`;
