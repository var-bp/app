import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  Button,
  Label,
  Link,
  TextInput,
  RequiredText,
  Icon,
} from '../../../../shared';
import {Black, Blue, Yellow} from '../../../../helpers/colors';
import {Container, User, Row} from './Form.styles';

const Form = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <User>
        <Icon name="user" size={100} color={Black[2]} />
      </User>
      <Row height="90px">
        <Label>User name</Label>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCompleteType="username"
            />
          )}
          name="firstName"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <RequiredText>Required</RequiredText>}
      </Row>
      <Row height="90px">
        <Label>Password</Label>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              autoCompleteType="password"
            />
          )}
          name="password"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <RequiredText>Required</RequiredText>}
      </Row>
      <Row marginBottom="40px" alignItems="flex-end">
        <Link title="Forgot Password?" onPress={() => {}} />
      </Row>
      <Row marginBottom="35px">
        <Button
          title="Login"
          backgroundColor={Blue[1]}
          onPress={handleSubmit(onSubmit)}
        />
      </Row>
      <Button
        title="No account yet? Signup now"
        backgroundColor={Yellow[1]}
        color={Black[2]}
        onPress={() => {}}
      />
    </Container>
  );
};

export default Form;
