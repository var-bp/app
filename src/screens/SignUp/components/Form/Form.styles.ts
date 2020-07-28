import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {Black} from '../../../../helpers/colors';
import {
  FontFamily,
  FontWeight,
  FontSize,
  LineHeight,
} from '../../../../helpers/typo';
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

export const LoginText = styled(Text)`
  font-family: ${FontFamily[FontWeight.Normal]};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.S};
  line-height: ${LineHeight[FontSize.S]};
  color: ${Black[2]};
`;

export const LoginTextContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
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
