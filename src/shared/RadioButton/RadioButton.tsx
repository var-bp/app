import React, {FC} from 'react';
import {RadioButtonPT} from './RadioButton.types';
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
        <Radio borderColor={isChecked ? color : uncheckedColor}>
          {isChecked ? (
            <Dot
              backgroundColor={isChecked ? color : uncheckedColor}
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
