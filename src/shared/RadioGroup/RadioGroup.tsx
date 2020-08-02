import React, {FC, useState} from 'react';
import RadioButton from './components/RadioButton';
import {Black, Yellow} from 'helpers/colors';
import {RadioGroupPT} from './RadioGroup.types';
import {Container, Offset} from './RadioGroup.styles';

const RadioGroup: FC<RadioGroupPT> = ({
  group = [],
  offsetLeft,
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
      {group.map((item, i) => (
        <Offset key={item.label} marginLeft={i === 0 ? 0 : offsetLeft}>
          <RadioButton
            value={item.value}
            label={item.label}
            isChecked={item.value === value}
            disabled={item.isDisabled}
            uncheckedColor={Black[2]}
            color={Yellow[1]}
            onPress={onPress}
          />
        </Offset>
      ))}
    </Container>
  );
};

export default RadioGroup;
