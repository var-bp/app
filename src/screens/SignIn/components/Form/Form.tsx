import React from 'react';
import {Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import TextInput from '../../../../shared/TextInput';
import {Black} from '../../../../helpers/colors';
import Icon from '../../../../shared/Icon';
import {Container, User, Row, RequiredText} from './Form.styles';

const Form = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <User>
        <Icon name="user" size={100} color={Black[1]} />
      </User>
      <Row>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="User name"
            />
          )}
          name="firstName"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <RequiredText>Required</RequiredText>}
      </Row>

      <Row>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Last name"
            />
          )}
          name="lastName"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <RequiredText>Required</RequiredText>}
      </Row>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
};

export default Form;
