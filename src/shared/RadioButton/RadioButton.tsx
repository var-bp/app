import React, {FC} from 'react';
import {RadioButtonPT} from './RadioButton.types';
import {Gray} from '../../helpers/colors';
import {Pressable, Container, Text, Radio, Dot} from './RadioButton.styles';

const RadioButton: FC<RadioButtonPT> = ({
  value,
  label,
  isChecked,
  disabled,
  onPress,
  uncheckedColor,
  color,
}) => {
  const onPressWrapper = () => {
    onPress(value);
  };

  return (
    <Pressable onPress={disabled ? undefined : onPressWrapper}>
      <Container>
        <Radio
          borderColor={disabled ? Gray[4] : isChecked ? color : uncheckedColor}>
          {isChecked ? (
            <Dot
              backgroundColor={
                disabled ? Gray[4] : isChecked ? color : uncheckedColor
              }
              scale={1}
            />
          ) : null}
        </Radio>
        <Text>{label}</Text>
      </Container>
    </Pressable>
  );
};

export default RadioButton;
