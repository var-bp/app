import React, {useState, forwardRef} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {TextInputPT, OnBlurFn, OnFocusFn} from './TextInput.types';
import {Input} from './TextInput.styles';

const TextInput = forwardRef<RNTextInput, TextInputPT>(
  (
    {onChangeText, onBlur, onFocus, placeholder, value, secureTextEntry},
    ref,
  ) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isBlur, setIsBlur] = useState(false);

    const handleFocus: OnFocusFn = (e) => {
      setIsFocus(true);
      setIsBlur(false);
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur: OnBlurFn = (e) => {
      setIsFocus(false);
      setIsBlur(true);
      if (onBlur) {
        onBlur(e);
      }
    };

    return (
      <Input
        ref={ref}
        isFocus={isFocus}
        isBlur={isBlur}
        onChangeText={onChangeText}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    );
  },
);

export default TextInput;
