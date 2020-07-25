import React, {FC, useState} from 'react';
import {TextInputPT, OnBlurFn, OnFocusFn} from './TextInput.types';
import {Input} from './TextInput.styles';

const TextInput: FC<TextInputPT> = ({
  onChangeText,
  onBlur,
  onFocus,
  placeholder,
  value,
  secureTextEntry,
}) => {
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
};

export default TextInput;
