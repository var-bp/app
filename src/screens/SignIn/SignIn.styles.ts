import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SCREEN_CONTAINER_OFFSET} from '../../helpers/spacing';
import {White} from '../../helpers/colors';

export const Container = styled(SafeAreaView)`
  padding: ${SCREEN_CONTAINER_OFFSET};
  flex: 1;
  justify-content: center;
  background-color: ${White[1]};
`;
