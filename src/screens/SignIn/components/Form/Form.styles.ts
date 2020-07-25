import styled from 'styled-components/native';
import {View} from 'react-native';
import {RowPT} from './Form.types';

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-self: center;
  max-width: 330px;
  min-width: 280px;
`;

export const User = styled(View)`
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Row = styled(View)<RowPT>`
  ${({height}) =>
    height != null &&
    `
    height: ${height};
  `}
  ${({marginBottom}) =>
    marginBottom != null &&
    `
    margin-bottom: ${marginBottom};
  `}
  ${({alignItems}) =>
    alignItems != null &&
    `
    align-items: ${alignItems};
  `}
`;
