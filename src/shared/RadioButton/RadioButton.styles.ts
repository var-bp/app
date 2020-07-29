import styled from 'styled-components/native';
import {
  TouchableWithoutFeedback,
  Text as RNText,
  Animated,
  View,
} from 'react-native';
import {Black} from '../../helpers/colors';
import {FontFamily, FontWeight, FontSize, LineHeight} from '../../helpers/typo';
import {RadioPT, DotPT} from './RadioButton.types';

export const Pressable = styled(TouchableWithoutFeedback)``;

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
`;

export const Text = styled(RNText)`
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.S};
  line-height: ${LineHeight[FontSize.S]};
  color: ${Black[2]};
`;

export const Radio = styled(Animated.View)<RadioPT>`
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin: 8px;
  border-color: ${({borderColor}) => borderColor};
  border-width: 2px;
`;

export const Dot = styled(Animated.View)<DotPT>`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: ${({backgroundColor}) => backgroundColor};
  ${({scale}) => `transform: scale(${scale});`};
`;
