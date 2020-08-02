import React, {FC, useRef, useEffect, useCallback} from 'react';
import {Animated} from 'react-native';
import {Gray} from 'helpers/colors';
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
  const animatedValue: number = isChecked ? 1 : 0;

  const scaleRef = useRef(new Animated.Value(animatedValue)).current;
  const borderColorRef = useRef(new Animated.Value(animatedValue)).current;

  const animate = useCallback(
    (toValue: number, duration: number = 200) => {
      Animated.parallel([
        Animated.timing(scaleRef, {
          toValue,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(borderColorRef, {
          toValue,
          duration,
          useNativeDriver: false,
        }),
      ]).start();
    },
    [borderColorRef, scaleRef],
  );

  const interpolatedBorderColor = borderColorRef.interpolate({
    inputRange: [0, 1],
    outputRange: [uncheckedColor, color],
  });

  const onPressWrapper = () => {
    animate(1);
    onPress(value);
  };

  useEffect(() => {
    if (!isChecked) {
      animate(0);
    }
  }, [isChecked, animate]);

  return (
    <Pressable onPress={disabled ? undefined : onPressWrapper}>
      <Container>
        <Radio
          style={{borderColor: disabled ? Gray[4] : interpolatedBorderColor}}>
          {isChecked ? (
            <Dot
              backgroundColor={
                disabled ? Gray[4] : isChecked ? color : uncheckedColor
              }
              style={{transform: [{scale: scaleRef}]}}
            />
          ) : null}
        </Radio>
        <Text>{label}</Text>
      </Container>
    </Pressable>
  );
};

export default RadioButton;
