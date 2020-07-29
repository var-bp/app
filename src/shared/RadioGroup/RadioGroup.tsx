import React, {FC, useState} from 'react';
import RadioButton from '../RadioButton';
import {Black, Yellow} from '../../helpers/colors';
import {RadioGroupPT} from './RadioGroup.types';
import {Container} from './RadioGroup.styles';

const RadioGroup: FC<RadioGroupPT> = ({
  group = [],
  defaultChecked,
  onSelect,
}) => {
  const [value, setValue] = useState<string | undefined>(defaultChecked);

  const onPress = (v: string) => {
    setValue(v);
    onSelect(v);
  };

  return (
    <Container>
      {group.map((item) => (
        <RadioButton
          key={item.label}
          value={item.value}
          label={item.label}
          isChecked={item.value === value}
          disabled={item.isDisabled}
          uncheckedColor={Black[2]}
          color={Yellow[1]}
          onPress={onPress}
        />
      ))}
    </Container>
  );
};

export default RadioGroup;
