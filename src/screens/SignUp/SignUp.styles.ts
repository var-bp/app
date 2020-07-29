import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView as RNKeyboardAvoidingView} from 'react-native';
import {SCREEN_CONTAINER_OFFSET} from '../../helpers/spacing';
import {White} from '../../helpers/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${White[1]};
`;

export const KeyboardAvoidingView = styled(RNKeyboardAvoidingView)`
  padding: ${SCREEN_CONTAINER_OFFSET};
  flex: 1;
  justify-content: center;
`;
