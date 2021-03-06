import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontFamily, FontWeight} from '../../helpers/typo';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
`;
