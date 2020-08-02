import styled from 'styled-components/native';
import {
  TouchableWithoutFeedback,
  Text as RNText,
  Animated,
  View,
} from 'react-native';
import {Black} from 'helpers/colors';
import {FontFamily, FontWeight, FontSize, LineHeight} from 'helpers/typo';
import {RadioPT, DotPT} from './RadioButton.types';

export const Pressable = styled(TouchableWithoutFeedback)`
  margin-left: 15px;
`;

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
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
  height: 24px;
  width: 24px;
  border-radius: 12px;
  margin-right: 8px;
  border-width: 2px;
`;

export const Dot = styled(Animated.View)<DotPT>`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({backgroundColor}) => backgroundColor};
`;
