import React, {forwardRef, useRef} from 'react';
import {TextInput as RNTextInput, Animated} from 'react-native';
import {Gray, Blue} from 'helpers/colors';
import {TextInputPT, OnBlurFn, OnFocusFn} from './TextInput.types';
import {InputWrapper, Input} from './TextInput.styles';

const TextInput = forwardRef<RNTextInput, TextInputPT>(
  (
    {
      onChangeText,
      onBlur,
      onFocus,
      onSubmitEditing,
      placeholder,
      value,
      keyboardType,
      secureTextEntry,
      autoCompleteType,
      autoCapitalize,
      returnKeyType,
      blurOnSubmit,
    },
    ref,
  ) => {
    const borderColorRef = useRef(new Animated.Value(0)).current;

    const animate = (toValue: number, duration: number = 200) => {
      Animated.timing(borderColorRef, {
        toValue,
        duration,
        useNativeDriver: false,
      }).start();
    };

    const interpolatedBorderColor = borderColorRef.interpolate({
      inputRange: [0, 1],
      outputRange: [Gray[4], Blue[3]],
    });

    const handleFocus: OnFocusFn = (e) => {
      animate(1);
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur: OnBlurFn = (e) => {
      animate(0);
      if (onBlur) {
        onBlur(e);
      }
    };

    return (
      <InputWrapper style={{borderBottomColor: interpolatedBorderColor}}>
        <Input
          ref={ref}
          autoCompleteType={autoCompleteType}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={handleBlur}
          onFocus={handleFocus}
          blurOnSubmit={blurOnSubmit}
          value={value}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
        />
      </InputWrapper>
    );
  },
);

export default TextInput;
