import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontFamily, FontWeight} from '../../common/typo';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: ${FontFamily[FontWeight.Light]};
  font-weight: ${FontWeight.Light};
`;
