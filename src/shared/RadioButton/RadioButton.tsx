import React, {FC} from 'react';
import {RadioButtonPT} from './RadioButton.types';
// import {White} from '../../helpers/colors';
import {Container, Text, Radio, Circle, Dot} from './RadioButton.styles';

// TODO: https://reactnative.dev/docs/animated
// TODO: https://github.com/callstack/react-native-paper/blob/master/src/components/RadioButton/RadioButtonAndroid.tsx
const RadioButton: FC<RadioButtonPT> = ({
  value,
  label,
  status,
  disabled,
  onPress,
  uncheckedColor,
  color,
}) => {
  return (
    <Container onPress={onPress}>
      {/* <Radio
        value={value}
        disabled={disabled}
        status={status}
        color={color}
        uncheckedColor={uncheckedColor}
      /> */}
      {/* <Radio>
        {checked ? (
          <Circle>
            <Dot />
          </Circle>
        ) : null}
      </Radio>
      <Text>{label}</Text> */}
    </Container>
  );
};

export default RadioButton;
